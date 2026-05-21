import { Expense } from "../../modules/expense/expense.model.js";
import { ExpenseSplit } from "../../modules/expense/expenseSplit.model.js";
import { Settlement } from "./settlement.model.js";
import { Trip } from "../../modules/trip/trip.model.js";

import {
    calculateBalances
} from "./utils/balanceCalculator.js";

import {
    optimizeSettlements
} from "./utils/settlementOptimizer.js";

const getTripBalances = async (tripId) => {

    // STEP 1:
    // Validate trip exists

    const trip = await Trip.findById(tripId);

    if (!trip) {
        throw new Error("Trip not found");
    }

    // STEP 2:
    // Fetch financial records

    const expenses =
        await Expense.find({ tripId });

    const expenseIds =
        expenses.map(
            (expense) => expense._id
        );

    const expenseSplits =
        await ExpenseSplit.find({
            expenseId: {
                $in: expenseIds
            }
        });

    const settlements =
        await Settlement.find({
            tripId
        });

    // STEP 3:
    // Compute balances

    const balances =
        calculateBalances({
            expenses,
            expenseSplits,
            settlements
        });

    // STEP 4:
    // Generate settlement suggestions

    const suggestedSettlements =
        optimizeSettlements(
            balances
        );

    // STEP 5:
    // Return result

    return {
        balances,
        suggestedSettlements
    };
};

const createSettlement = async ({
    tripId,
    fromUserId,
    toUserId,
    amount,
    currency
}) => {

    // STEP 1:
    // Validate trip exists

    const trip = await Trip.findById(tripId);

    if (!trip) {
        throw new Error("Trip not found");
    }

    // STEP 2:
    // Prevent self settlement

    if (
        fromUserId.toString() ===
        toUserId.toString()
    ) {
        throw new Error(
            "Cannot settle with yourself"
        );
    }

    // STEP 3:
    // Create settlement record

    const settlement =
        await Settlement.create({
            tripId,
            fromUserId,
            toUserId,
            amount,
            currency
        });

    return settlement;
};

export {
    getTripBalances,
    createSettlement
};