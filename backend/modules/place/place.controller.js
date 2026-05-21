import {

    getPlaceInsights as getPlaceInsightsService,

    generateTravelAdvice as generateTravelAdviceService

}
from "./placeService.js";

const getPlaceInsights =
    async (
        req,
        res
    ) => {

    try {

        const {
            destination
        } = req.params;

        const insights =
            await getPlaceInsightsService(
                destination
            );

        return res.status(200).json({

            success: true,

            data: insights
        });

    } catch (error) {

        return res.status(500).json({

            success: false,

            message: error.message
        });
    }
};

const generateTravelAdvice =
    async (
        req,
        res
    ) => {

    try {

        const advice =
            await generateTravelAdviceService(
                req.body
            );

        return res.status(200).json({

            success: true,

            data: advice
        });

    } catch (error) {

        return res.status(500).json({

            success: false,

            message: error.message
        });
    }
};

export {

    getPlaceInsights,

    generateTravelAdvice
};