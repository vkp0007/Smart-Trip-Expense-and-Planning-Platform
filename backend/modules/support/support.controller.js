import {

    createSupportTicket as createSupportTicketService,

    getTripSupportTickets as getTripSupportTicketsService,

    updateTicketStatus as updateTicketStatusService

}
from "./supportService.js";

const createSupportTicket =
    async (
        req,
        res
    ) => {

    try {

        const ticket =
            await createSupportTicketService(
                req.body
            );

        return res.status(201).json({

            success: true,

            message:
                "Support ticket created successfully",

            data: ticket
        });

    } catch (error) {

        return res.status(500).json({

            success: false,

            message: error.message
        });
    }
};

const getTripSupportTickets =
    async (
        req,
        res
    ) => {

    try {

        const { tripId } =
            req.params;

        const { userId } =
            req.query;

        const tickets =
            await getTripSupportTicketsService({

                tripId,

                userId
            });

        return res.status(200).json({

            success: true,

            data: tickets
        });

    } catch (error) {

        return res.status(500).json({

            success: false,

            message: error.message
        });
    }
};

const updateTicketStatus =
    async (
        req,
        res
    ) => {

    try {

        const ticket =
            await updateTicketStatusService(
                req.body
            );

        return res.status(200).json({

            success: true,

            message:
                "Ticket status updated successfully",

            data: ticket
        });

    } catch (error) {

        return res.status(500).json({

            success: false,

            message: error.message
        });
    }
};

export {

    createSupportTicket,

    getTripSupportTickets,

    updateTicketStatus
};