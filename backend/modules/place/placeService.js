import placeInsights from "./placeInsights.json" with { type: "json" };

const getPlaceInsights = async (destination) => {

    const insights = placeInsights[destination];

    if (!insights) {
        throw new Error("Place insights not found");
    }

    return insights;
};

const generateTravelAdvice = async ({
    destination,
    startDate,
    endDate
}) => {

    const insights = placeInsights[destination];

    if (!insights) {
        throw new Error("Place insights not found");
    }

    const startMonth =
        new Date(startDate).getMonth() + 1;

    let seasonalAdvice =
        insights.seasonalNotes;

    if (
        destination === "Goa" &&
        [6, 7, 8].includes(startMonth)
    ) {

        seasonalAdvice =
            "Monsoon season expected. Outdoor activities may face disruptions.";
    }

    if (
        destination === "Manali" &&
        [12, 1, 2].includes(startMonth)
    ) {

        seasonalAdvice =
            "Heavy snowfall possible. Carry winter clothing and check road conditions.";
    }

    return {

        destination,

        travelWindow: {
            startDate,
            endDate
        },

        attractions:
            insights.popularAttractions,

        warnings:
            insights.warnings,

        travelAdvice:
            seasonalAdvice
    };
};

export {
    getPlaceInsights,
    generateTravelAdvice
};