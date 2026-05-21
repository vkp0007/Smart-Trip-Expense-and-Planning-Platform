import express from "express";

import {

    getPlaceInsights,

    generateTravelAdvice

}
from "./place.controller.js";

const router = express.Router();

router.get(
    "/:destination",
    getPlaceInsights
);

router.post(
    "/travel-advice",
    generateTravelAdvice
);

export default router;