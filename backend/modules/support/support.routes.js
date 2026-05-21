import express from "express";

import {

    createSupportTicket,

    getTripSupportTickets,

    updateTicketStatus

}
from "./support.controller.js";

const router = express.Router();

router.post(
    "/",
    createSupportTicket
);

router.get(
    "/:tripId",
    getTripSupportTickets
);

router.patch(
    "/status",
    updateTicketStatus
);

export default router;