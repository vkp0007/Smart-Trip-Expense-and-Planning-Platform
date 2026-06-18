import express from "express";

import {
  createExpense,
  getExpensesByTrip,
  getTripAnalytics,
}
from "../expense/expense.controller.js";

const router = express.Router();

router.post(
  "/",
  createExpense
);

router.get(
  "/trip/:tripId",
  getExpensesByTrip
);

router.get(
  "/trip/:tripId/analytics",
  getTripAnalytics
);

export default router;