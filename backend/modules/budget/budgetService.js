import { Trip } from "../../modules/trip/trip.model.js";
import { Expense } from "../../modules/expense/expense.model.js";

import {
    calculateBudgetPlan,
    generateBudgetAlerts
}
from "../budget/utils/budgetCalculator.js";

const getBudgetSummary = async (
    tripId
) => {

    // STEP 1:
    // Validate trip

    const trip = await Trip.findById(
        tripId
    );

    if (!trip) {
        throw new Error(
            "Trip not found"
        );
    }

    // STEP 2:
    // Fetch expenses

    const expenses =
        await Expense.find({
            tripId
        });

    // STEP 3:
    // Calculate trip duration

    const start =
        new Date(trip.startDate);

    const end =
        new Date(trip.endDate);

    const duration =
        Math.ceil(
            (end - start) /
            (1000 * 60 * 60 * 24)
        ) + 1;

    // STEP 4:
    // Mock category allocation

    // Static rule-based allocations
    // allowed by assignment

    const categoryAllocations = {
        food: 30,
        hotel: 40,
        transport: 20,
        activities: 10
    };

    // STEP 5:
    // Generate budget plan

    const budgetPlan =
        calculateBudgetPlan({
            totalBudget:
                trip.totalBudget,

            duration,

            categoryAllocations
        });

    // STEP 6:
    // Calculate actual spending

    const actualCategorySpending = {};

    expenses.forEach((expense) => {

        const category =
            expense.category;

        if (
            !actualCategorySpending[
                category
            ]
        ) {

            actualCategorySpending[
                category
            ] = 0;
        }

        actualCategorySpending[
            category
        ] += expense.convertedAmount;
    });

    // STEP 7:
    // Generate alerts

    const alerts =
        generateBudgetAlerts({

            categoryBudgets:
                budgetPlan.categoryBudgets,

            actualCategorySpending
        });

    // STEP 8:
    // Calculate total spent

    const totalSpent =
        expenses.reduce(
            (sum, expense) =>
                sum +
                expense.convertedAmount,
            0
        );

    // STEP 9:
    // Return summary

    return {

        totalBudget:
            trip.totalBudget,

        totalSpent,

        remainingBudget:
            trip.totalBudget -
            totalSpent,

        duration,

        dailyBudget:
            budgetPlan.dailyBudget,

        categoryBudgets:
            budgetPlan.categoryBudgets,

        alerts
    };
};

export {
    getBudgetSummary
};