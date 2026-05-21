import express from "express";

import {
    getUserLoyalty
}
from "./loyalty.controller.js";

const router = express.Router();

router.get(
    "/:userId",
    getUserLoyalty
);

export default router;