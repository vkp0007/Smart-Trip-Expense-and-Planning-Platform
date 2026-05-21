import express from "express";

import {
    getBudgetSummary
}
from "../budget/budget.controller.js";

const router = express.Router();

router.get(
    "/:tripId",
    getBudgetSummary
);

export default router;