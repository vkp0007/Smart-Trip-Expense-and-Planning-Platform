import {
    expenseBreakdownResponses,
    budgetOptimizationResponses
}
    from "../ai/mockAiResponses.js";

const explainExpenseBreakdown =
    async ({
        balance
    }) => {

        let summary = "";

        if (balance > 0) {

            summary =
                `You should receive ₹${balance} from other participants.`;
        }

        else if (balance < 0) {

            summary =
                `You owe ₹${Math.abs(balance)} to other participants.`;
        }

        else {

            summary =
                "Your balances are fully settled.";
        }

        return {
            explanation:
                expenseBreakdownResponses.debtExplanation,
            summary
        };
    };

const suggestBudgetOptimization =
    async ({
        category
    }) => {

        const suggestion =
            budgetOptimizationResponses[
            category
            ] ||
            "Current spending appears within acceptable limits.";

        return {
            category,
            suggestion
        };
    };

export {
    explainExpenseBreakdown,
    suggestBudgetOptimization
};