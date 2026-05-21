import {
    getBudgetSummary as getBudgetSummaryService
}
from "../budget/budgetService.js";

const getBudgetSummary = async (
    req,
    res
) => {

    try {

        const { tripId } =
            req.params;

        const budgetSummary =
            await getBudgetSummaryService(
                tripId
            );

        return res.status(200).json({

            success: true,

            data: budgetSummary
        });

    } catch (error) {

        return res.status(500).json({

            success: false,

            message: error.message
        });
    }
};

export {
    getBudgetSummary
};