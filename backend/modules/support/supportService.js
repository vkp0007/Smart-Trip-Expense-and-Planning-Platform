import { SupportTicket }
from "./supportTicket.model.js";

import { Trip }
from "../../modules/trip/trip.model.js";

const createSupportTicket =
    async ({
        tripId,
        createdBy,
        issueType,
        message
    }) => {

    // STEP 1:
    // Validate trip

    const trip =
        await Trip.findById(tripId);

    if (!trip) {
        throw new Error(
            "Trip not found"
        );
    }

    // STEP 2:
    // Validate user belongs to trip

    const isParticipant =
        trip.participants.some(
            (participant) =>
                participant.user.toString() ===
                createdBy.toString()
        );

    if (!isParticipant) {

        throw new Error(
            "Only trip participants can create support tickets"
        );
    }

    // STEP 3:
    // Create ticket

    const ticket =
        await SupportTicket.create({

            tripId,

            createdBy,

            issueType,

            message
        });

    return ticket;
};

const getTripSupportTickets =
    async ({
        tripId,
        userId
    }) => {

    // STEP 1:
    // Validate trip

    const trip =
        await Trip.findById(tripId);

    if (!trip) {
        throw new Error(
            "Trip not found"
        );
    }

    // STEP 2:
    // Access validation

    const isParticipant =
        trip.participants.some(
            (participant) =>
                participant.user.toString() ===
                userId.toString()
        );

    if (!isParticipant) {

        throw new Error(
            "Access denied"
        );
    }

    // STEP 3:
    // Fetch tickets

    const tickets =
        await SupportTicket.find({
            tripId
        })
        .populate(
            "createdBy",
            "name email"
        )
        .sort({
            createdAt: -1
        });

    return tickets;
};

const updateTicketStatus =
    async ({
        ticketId,
        status
    }) => {

    const ticket =
        await SupportTicket.findById(
            ticketId
        );

    if (!ticket) {
        throw new Error(
            "Support ticket not found"
        );
    }

    ticket.status = status;

    await ticket.save();

    return ticket;
};

export {
    createSupportTicket,
    getTripSupportTickets,
    updateTicketStatus
};