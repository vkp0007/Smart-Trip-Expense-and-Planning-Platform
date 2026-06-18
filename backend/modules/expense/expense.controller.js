import {
    createExpense as createExpenseService,
    getExpensesByTrip as getExpensesByTripService,
    getTripAnalytics as getTripAnalyticsService,
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

const getExpensesByTrip =
  async (req, res) => {

    try {

      const { tripId } =
        req.params;

      const expenses =
        await getExpensesByTripService(
          tripId
        );

      return res.status(200).json({

        success: true,

        data: expenses,
      });

    } catch (error) {

      return res.status(500).json({

        success: false,

        message:
          error.message,
      });
    }
};

const getTripAnalytics =
  async (req, res) => {

    try {

      const { tripId } =
        req.params;

      const analytics =
        await getTripAnalyticsService(
          tripId
        );

      return res.status(200).json({

        success: true,

        data: analytics,
      });

    } catch (error) {

      return res.status(500).json({

        success: false,

        message:
          error.message,
      });
    }
};


export {
    createExpense, 
    getExpensesByTrip,
    getTripAnalytics
};