import {

    getAllVendors as getAllVendorsService,

    filterVendors as filterVendorsService

}
from "./vendorService.js";

const getAllVendors =
    async (
        req,
        res
    ) => {

    try {

        const vendors =
            await getAllVendorsService();

        return res.status(200).json({

            success: true,

            data: vendors
        });

    } catch (error) {

        return res.status(500).json({

            success: false,

            message: error.message
        });
    }
};

const filterVendors =
    async (
        req,
        res
    ) => {

    try {

        const {
            city,
            category
        } = req.query;

        const vendors =
            await filterVendorsService({

                city,

                category
            });

        return res.status(200).json({

            success: true,

            data: vendors
        });

    } catch (error) {

        return res.status(500).json({

            success: false,

            message: error.message
        });
    }
};

export {

    getAllVendors,

    filterVendors
};