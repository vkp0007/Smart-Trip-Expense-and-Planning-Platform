import {

    getTripBalances as getTripBalancesService,

    createSettlement as createSettlementService

}
from "./settlementService.js";

const getTripBalances = async (
    req,
    res
) => {

    try {

        const { tripId } =
            req.params;

        const balances =
            await getTripBalancesService(
                tripId
            );

        return res.status(200).json({

            success: true,

            data: balances
        });

    } catch (error) {

        return res.status(500).json({

            success: false,

            message: error.message
        });
    }
};

const createSettlement = async (
    req,
    res
) => {

    try {

        const settlement =
            await createSettlementService(
                req.body
            );

        return res.status(201).json({

            success: true,

            message:
                "Settlement completed successfully",

            data: settlement
        });

    } catch (error) {

        return res.status(500).json({

            success: false,

            message: error.message
        });
    }
};

export {

    getTripBalances,

    createSettlement
};