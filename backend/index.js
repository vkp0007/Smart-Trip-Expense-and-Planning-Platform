import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import {
  databaseConnection as connectDB,
} from "./config/databaseConnection.js";

import tripRoutes from "./modules/trip/trip.routes.js";
import expenseRoutes from "./modules/expense/expense.routes.js";
import settlementRoutes from "./modules/settlement/settlement.routes.js";
import budgetRoutes from "./modules/budget/budget.routes.js";
import loyaltyRoutes from "./modules/loyalty/loyalty.routes.js";
import aiRoutes from "./modules/ai/ai.routes.js";
import supportRoutes from "./modules/support/support.routes.js";
import vendorRoutes from "./modules/vendor/vendor.routes.js";
import placeRoutes from "./modules/place/place.routes.js";
import userRoutes from "./modules/user/user.routes.js";

/* -------------------- ENV -------------------- */

dotenv.config();

const PORT = process.env.PORT || 5000;

/* -------------------- APP -------------------- */

const app = express();

/* -------------------- DATABASE -------------------- */

connectDB();

/* -------------------- MIDDLEWARES -------------------- */

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());

/* -------------------- ROUTES -------------------- */

app.use("/api/users", userRoutes);

app.use("/api/trips", tripRoutes);

app.use("/api/expenses", expenseRoutes);

app.use("/api/settlements", settlementRoutes);

app.use("/api/budget", budgetRoutes);

app.use("/api/loyalty", loyaltyRoutes);

app.use("/api/ai", aiRoutes);

app.use("/api/support", supportRoutes);

app.use("/api/vendors", vendorRoutes);

app.use("/api/places", placeRoutes);

/* -------------------- HEALTH CHECK -------------------- */

app.get("/", (req, res) => {
  res.send("API Running");
});

/* -------------------- SERVER -------------------- */

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});