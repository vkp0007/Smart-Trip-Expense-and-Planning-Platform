const roundToTwo = (num) => {
    return Math.round(num * 100) / 100;
};

const calculateBudgetPlan = ({
    totalBudget,
    duration,
    categoryAllocations
}) => {

    if (duration <= 0) {
        throw new Error(
            "Duration must be greater than zero"
        );
    }

    const dailyBudget =
        roundToTwo(
            totalBudget / duration
        );

    const categoryBudgets = {};

    Object.entries(
        categoryAllocations
    ).forEach(
        ([category, percentage]) => {

            categoryBudgets[category] =
                roundToTwo(
                    (totalBudget * percentage) / 100
                );
        }
    );

    return {
        totalBudget,
        duration,
        dailyBudget,
        categoryBudgets
    };
};

const generateBudgetAlerts = ({
    categoryBudgets,
    actualCategorySpending
}) => {

    const alerts = [];

    Object.entries(
        actualCategorySpending
    ).forEach(
        ([category, spent]) => {

            const allocated =
                categoryBudgets[category] || 0;

            if (spent > allocated) {

                alerts.push({
                    category,

                    status: "OVER_BUDGET",

                    allocated,

                    spent,

                    exceededBy:
                        roundToTwo(
                            spent - allocated
                        )
                });
            }

            else {

                alerts.push({
                    category,

                    status: "WITHIN_BUDGET",

                    allocated,

                    spent,

                    remaining:
                        roundToTwo(
                            allocated - spent
                        )
                });
            }
        }
    );

    return alerts;
};

export {
    calculateBudgetPlan,
    generateBudgetAlerts
};