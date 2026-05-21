import express from "express";

import {

    createTrip,

    getTripById,

    addParticipant,

    completeTrip

}
from "./trip.controller.js";

const router = express.Router();

router.post(
    "/",
    createTrip
);

router.get(
    "/:tripId",
    getTripById
);

router.post(
    "/participants",
    addParticipant
);

router.patch(
    "/:tripId/complete",
    completeTrip
);

export default router;