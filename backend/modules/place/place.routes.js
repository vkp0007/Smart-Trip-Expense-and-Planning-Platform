import express
from "express";

import {

  getPlaceInsights,

  generateTravelAdvice,

  getAllDestinations,

  getRegions,

  getDestinationsByRegion,

  searchDestinations

}
from "./place.controller.js";

const router =
  express.Router();

router.get(
  "/destinations",
  getAllDestinations
);

router.get(
  "/regions",
  getRegions
);

router.get(
  "/region/:region",
  getDestinationsByRegion
);

router.get(
  "/search/:keyword",
  searchDestinations
);

router.get(
  "/insights/:destination",
  getPlaceInsights
);

router.post(
  "/travel-advice",
  generateTravelAdvice
);

export default router;