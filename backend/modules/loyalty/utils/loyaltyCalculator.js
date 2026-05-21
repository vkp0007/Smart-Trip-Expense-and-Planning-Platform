const calculateLoyaltyScore = ({
    totalTrips,
    totalSpend,
    successfulSettlements
}) => {

    let score = 0;

    // Trip completion score

    score += totalTrips * 10;

    // Spending score

    score += Math.floor(
        totalSpend / 1000
    );

    // Settlement behavior score

    score +=
        successfulSettlements * 5;

    return score;
};

const determineLoyaltyTier = (
    loyaltyScore
) => {

    if (loyaltyScore >= 100) {

        return "Gold";
    }

    if (loyaltyScore >= 50) {

        return "Silver";
    }

    return "Bronze";
};

export {
    calculateLoyaltyScore,
    determineLoyaltyTier
};