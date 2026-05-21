import {

    explainExpenseBreakdown as explainExpenseBreakdownService,

    suggestBudgetOptimization as suggestBudgetOptimizationService

}
from "../ai/aiService.js";

const explainExpenseBreakdown =
    async (req,res) => {

    try {

        const response =
            await explainExpenseBreakdownService(
                req.body
            );

        return res.status(200).json({

            success: true,

            data: response
        });

    } catch (error) {

        return res.status(500).json({

            success: false,

            message: error.message
        });
    }
};

const suggestBudgetOptimization =
    async (
        req,
        res
    ) => {

    try {

        const response =
            await suggestBudgetOptimizationService(
                req.body
            );

        return res.status(200).json({

            success: true,

            data: response
        });

    } catch (error) {

        return res.status(500).json({

            success: false,

            message: error.message
        });
    }
};

export {

    explainExpenseBreakdown,

    suggestBudgetOptimization
};