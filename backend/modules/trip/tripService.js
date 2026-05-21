import { Trip }
from "./trip.model.js";

import {
    updateUserLoyaltyAfterTrip
}
from "../../modules/loyalty/loyaltyService.js";

const createTrip = async ({
    title,
    description,
    destination,
    startDate,
    endDate,
    baseCurrency,
    totalBudget,
    createdBy,
    participants = []
}) => {

    // Ensure creator is included

    const creatorAlreadyIncluded =
        participants.some(
            (participant) =>
                participant.user.toString() ===
                createdBy.toString()
        );

    if (!creatorAlreadyIncluded) {

        participants.push({
            user: createdBy,
            role: "owner"
        });
    }

    const trip = await Trip.create({

        title,

        description,

        destination,

        startDate,

        endDate,

        baseCurrency,

        totalBudget,

        createdBy,

        participants
    });

    return trip;
};

const getTripById = async (
    tripId
) => {

    const trip =
        await Trip.findById(tripId)
            .populate(
                "participants.user",
                "name email"
            );

    if (!trip) {

        throw new Error(
            "Trip not found"
        );
    }

    return trip;
};

const addParticipant = async ({
    tripId,
    userId
}) => {

    const trip =
        await Trip.findById(tripId);

    if (!trip) {

        throw new Error(
            "Trip not found"
        );
    }

    // Prevent duplicates

    const alreadyParticipant =
        trip.participants.some(
            (participant) =>
                participant.user.toString() ===
                userId.toString()
        );

    if (alreadyParticipant) {

        throw new Error(
            "User already a participant"
        );
    }

    trip.participants.push({

        user: userId,

        role: "member"
    });

    await trip.save();

    return trip;
};

const completeTrip = async (tripId) => {

    // STEP 1:
    // Validate trip

    const trip = await Trip.findById(tripId);

    if (!trip) {

        throw new Error(
            "Trip not found"
        );
    }

    // STEP 2:
    // Prevent duplicate completion

   if (
    trip.status === "completed"
) {

    throw new Error(
        "Trip already completed"
    );
}



    // STEP 3:
    // Update trip status

    trip.status = "completed";

    await trip.save();

    // STEP 4:
    // Update loyalty for all participants

    for (
        const participant
        of trip.participants
    ) {

        await updateUserLoyaltyAfterTrip({

            tripId,

            userId:
                participant.user
        });
    }

    // STEP 5:
    // Return response

    return {

        tripId:
            trip._id,

        status:
            trip.status,

        message:
            "Trip completed successfully"
    };
};

export {

    createTrip,

    getTripById,

    addParticipant,

    completeTrip
};