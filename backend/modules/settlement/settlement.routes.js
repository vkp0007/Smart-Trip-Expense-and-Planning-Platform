import express from "express";

import {
    getTripBalances,
    createSettlement
} from "./settlement.controller.js";

const router = express.Router();

router.get(
    "/:tripId/balances",
    getTripBalances
);

router.post(
    "/",
    createSettlement
);

export default router;