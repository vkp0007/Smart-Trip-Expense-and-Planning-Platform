import { Expense } from "../../modules/expense/expense.model.js";
import { ExpenseSplit } from "../../modules/expense/expenseSplit.model.js";
import { Trip } from "../../modules/trip/trip.model.js";

import {
    calculateEqualSplit,
    calculateUnequalSplit,
    calculatePercentageSplit
} from "./utils/splitCalculator.js";

import {
    convertCurrency
} from "./utils/currencyConverter.js";

const createExpense = async ({
    tripId,
    payerId,
    amount,
    currency,
    category,
    description,
    splitType,
    participants = [],
    splits = []
}) => {

    // STEP 1:
    // Validate trip exists

    const trip = await Trip.findById(tripId);

    if (!trip) {
        throw new Error("Trip not found");
    }

    // STEP 2:
    // Validate payer belongs to trip

    const isPayerParticipant =
        trip.participants.some(
            (participant) =>
                participant.user.toString() ===
                payerId.toString()
        );

    if (!isPayerParticipant) {
        throw new Error(
            "Payer must be a trip participant"
        );
    }

    // STEP 3:
    // Convert amount into trip base currency

    const convertedAmount =
        convertCurrency({
            amount,
            fromCurrency: currency,
            toCurrency: trip.baseCurrency
        });

    // STEP 4:
    // Create expense document

    const expense = await Expense.create({
        tripId,
        payerId,
        amount,
        currency,
        convertedAmount,
        category,
        description,
        splitType
    });

    // STEP 5:
    // Generate splits

    let calculatedSplits = [];

    switch (splitType) {

        case "equal":

            calculatedSplits =
                calculateEqualSplit({
                    amount: convertedAmount,
                    participants
                });

            break;

        case "unequal":

            calculatedSplits =
                calculateUnequalSplit({
                    amount: convertedAmount,
                    splits
                });

            break;

        case "percentage":

            calculatedSplits =
                calculatePercentageSplit({
                    amount: convertedAmount,
                    splits
                });

            break;

        default:
            throw new Error(
                "Invalid split type"
            );
    }

    // STEP 6:
    // Create expense split records

    const expenseSplitDocs =
        calculatedSplits.map((split) => ({
            expenseId: expense._id,

            userId: split.userId,

            amountOwed: split.amountOwed,

            percentage:
                split.percentage || null
        }));

    await ExpenseSplit.insertMany(
        expenseSplitDocs
    );

    // STEP 7:
    // Return response

    return {
        expense,
        splits: expenseSplitDocs
    };
};

export {
    createExpense
};