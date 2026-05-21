import express from "express";

import {
    getAllVendors,
    filterVendors
}
    from "./vendor.controller.js";

const router = express.Router();

router.get(
    "/",
    getAllVendors
);

router.get(
    "/search",
    filterVendors
);

export default router;