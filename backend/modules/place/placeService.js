import places
from "../place/data/indiaDestinations.json"
with { type: "json" };

const getPlaceInsights =
  async (destination) => {

    const place =
      places.find(
        (item) =>
          item.name
            .toLowerCase() ===
          destination
            .toLowerCase()
      );

    if (!place) {

      throw new Error(
        "Destination not found"
      );
    }

    return place;
};

const generateTravelAdvice =
  async ({
    destination,
    startDate,
    endDate
  }) => {

    const place =
      await getPlaceInsights(
        destination
      );

    return {

      destination:
        place.name,

      state:
        place.state,

      region:
        place.region,

      travelWindow: {
        startDate,
        endDate
      },

      attractions:
        place.popularAttractions,

      recommendations: [

        `Visit ${place.popularAttractions[0]}`,

        `Explore attractions across ${place.state}`,

        `Discover the beauty of ${place.region}`,

        "Book accommodations early",

        "Plan local transportation in advance"
      ]
    };
};

const getAllDestinations =
  async () => {

    return places;
};

const getRegions =
  async () => {

    return [
      ...new Set(
        places.map(
          (place) =>
            place.region
        )
      )
    ];
};

const getDestinationsByRegion =
  async (region) => {

    return places.filter(
      (place) =>
        place.region
          .toLowerCase() ===
        region.toLowerCase()
    );
};

const searchDestinations =
  async (keyword) => {

    return places.filter(
      (place) =>
        place.name
          .toLowerCase()
          .includes(
            keyword.toLowerCase()
          )
    );
};

export {

  getPlaceInsights,

  generateTravelAdvice,

  getAllDestinations,

  getRegions,

  getDestinationsByRegion,

  searchDestinations
};