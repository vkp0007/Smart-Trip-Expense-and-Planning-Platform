import { User }
from "../../modules/user/user.model.js";

import { Expense }
from "../../modules/expense/expense.model.js";

import { Settlement }
from "../../modules/settlement/settlement.model.js";

import {
    calculateLoyaltyScore,
    determineLoyaltyTier
}
from "./utils/loyaltyCalculator.js";

const updateUserLoyaltyAfterTrip =
    async ({
        tripId,
        userId
    }) => {

    // STEP 1:
    // Fetch user

    const user =
        await User.findById(userId);

    if (!user) {
        throw new Error(
            "User not found"
        );
    }

    // STEP 2:
    // Calculate user spend

    const userExpenses =
        await Expense.find({
            tripId,
            payerId: userId
        });

    const totalSpend =
        userExpenses.reduce(
            (sum, expense) =>
                sum +
                expense.convertedAmount,
            0
        );

    // STEP 3:
    // Count settlements

    const settlementCount =
        await Settlement.countDocuments({
            tripId,
            fromUserId: userId
        });

    // STEP 4:
    // Update cumulative metrics

    user.loyalty.totalTrips += 1;

    user.loyalty.totalSpend +=
        totalSpend;

    user.loyalty
        .successfulSettlements +=
        settlementCount;

    // STEP 5:
    // Recalculate loyalty score

    const loyaltyScore =
        calculateLoyaltyScore({

            totalTrips:
                user.loyalty.totalTrips,

            totalSpend:
                user.loyalty.totalSpend,

            successfulSettlements:
                user.loyalty
                    .successfulSettlements
        });

    // STEP 6:
    // Determine loyalty tier

    const loyaltyTier =
        determineLoyaltyTier(
            loyaltyScore
        );

    // STEP 7:
    // Update loyalty fields

    user.loyalty.score =
        loyaltyScore;

    user.loyalty.tier =
        loyaltyTier;

    await user.save();

    return user.loyalty;
};

const getUserLoyalty = async (
    userId
) => {

    const user =
        await User.findById(userId)
            .select("loyalty name email");

    if (!user) {
        throw new Error(
            "User not found"
        );
    }

    return {
        userId: user._id,
        name: user.name,
        email: user.email,
        loyalty: user.loyalty
    };
};

export {
    updateUserLoyaltyAfterTrip,
    getUserLoyalty
};