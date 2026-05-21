import {

    createTrip as createTripService,

    getTripById as getTripByIdService,

    addParticipant as addParticipantService,

    completeTrip as completeTripService

}
from "./tripService.js";

const createTrip = async (
    req,
    res
) => {

    try {

        const trip =
            await createTripService(
                req.body
            );

        return res.status(201).json({

            success: true,

            message:
                "Trip created successfully",

            data: trip
        });

    } catch (error) {

        return res.status(500).json({

            success: false,

            message: error.message
        });
    }
};

const getTripById = async (
    req,
    res
) => {

    try {

        const { tripId } =
            req.params;

        const trip =
            await getTripByIdService(
                tripId
            );

        return res.status(200).json({

            success: true,

            data: trip
        });

    } catch (error) {

        return res.status(500).json({

            success: false,

            message: error.message
        });
    }
};

const addParticipant = async (
    req,
    res
) => {

    try {

        const trip =
            await addParticipantService(
                req.body
            );

        return res.status(200).json({

            success: true,

            message:
                "Participant added successfully",

            data: trip
        });

    } catch (error) {

        return res.status(500).json({

            success: false,

            message: error.message
        });
    }
};

const completeTrip = async (
    req,
    res
) => {

    try {

        const { tripId } =req.params;

        const result =
            await completeTripService(
                tripId
            );

        return res.status(200).json({

            success: true,

            data: result
        });

    } catch (error) {

        return res.status(500).json({

            success: false,

            message: error.message
        });
    }
};

export {

    createTrip,

    getTripById,

    addParticipant,

    completeTrip
};