import express from "express";
import dotenv from "dotenv";
const PORT = process.env.PORT || 5000;

import {
    databaseConnection as connectDB
} from "./config/databaseConnection.js";

import tripRoutes
from "./modules/trip/trip.routes.js";

import expenseRoutes
from "./modules/expense/expense.routes.js";

import settlementRoutes
from "./modules/settlement/settlement.routes.js";

import budgetRoutes
from "./modules/budget/budget.routes.js";

import loyaltyRoutes
from "./modules/loyalty/loyalty.routes.js";

import aiRoutes
from "./modules/ai/ai.routes.js";

import supportRoutes
from "./modules/support/support.routes.js";

import vendorRoutes
from "./modules/vendor/vendor.routes.js";

import placeRoutes
from "./modules/place/place.routes.js";

import userRoutes
from "./modules/user/user.routes.js";



// LOAD ENV VARIABLES

dotenv.config({
    path: ".env"
});

const app = express();


// DATABASE CONNECTION

connectDB();


// MIDDLEWARES

app.use(express.json());


// ROUTES
app.use(
    "/api/users",
    userRoutes
);

app.use(
    "/api/trips",
    tripRoutes
);

app.use(
    "/api/expenses",
    expenseRoutes
);

app.use(
    "/api/settlements",
    settlementRoutes
);

app.use(
    "/api/budget",
    budgetRoutes
);

app.use(
    "/api/loyalty",
    loyaltyRoutes
);


app.use(
    "/api/ai",
    aiRoutes
);

app.use(
    "/api/support",
    supportRoutes
);

app.use(
    "/api/vendors",
    vendorRoutes
);

app.use(
    "/api/places",
    placeRoutes
);
// HEALTH CHECK

app.get("/", (req, res) => {
    res.send("API Running");
});



// SERVER



app.listen(PORT, () => {

    console.log(
        `Server running on port ${PORT}`
    );
});