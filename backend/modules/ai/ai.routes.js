import express from "express";

import {
    explainExpenseBreakdown,
    suggestBudgetOptimization
}
from "../ai/ai.controller.js";

const router = express.Router();

router.post(
    "/expense-breakdown",
    explainExpenseBreakdown
);

router.post(
    "/budget-optimization",
    suggestBudgetOptimization
);

export default router;