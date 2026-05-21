import {
    createExpense as createExpenseService
}
from "../expense/expenseService.js";

const createExpense = async (
    req,
    res
) => {

    try {

        const expense =
            await createExpenseService(
                req.body
            );

        return res.status(201).json({

            success: true,

            message:
                "Expense created successfully",

            data: expense
        });

    } catch (error) {

        return res.status(500).json({

            success: false,

            message: error.message
        });
    }
};

export {
    createExpense
};