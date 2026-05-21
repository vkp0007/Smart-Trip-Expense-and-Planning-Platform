import {
    getUserLoyalty as getUserLoyaltyService
}
from "./loyaltyService.js";

const getUserLoyalty = async (
    req,
    res
) => {

    try {

        const { userId } =
            req.params;

        const loyalty =
            await getUserLoyaltyService(
                userId
            );

        return res.status(200).json({

            success: true,

            data: loyalty
        });

    } catch (error) {

        return res.status(500).json({

            success: false,

            message: error.message
        });
    }
};

export {
    getUserLoyalty
};