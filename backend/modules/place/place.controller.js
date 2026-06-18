import {

  getPlaceInsights as getPlaceInsightsService,

  generateTravelAdvice as generateTravelAdviceService,

  getAllDestinations as getAllDestinationsService,

  getRegions as getRegionsService,

  getDestinationsByRegion as getDestinationsByRegionService,

  searchDestinations as searchDestinationsService

}
from "./placeService.js";

const getPlaceInsights =
  async (req, res) => {

    try {

      const { destination } =
        req.params;

      const data =
        await getPlaceInsightsService(
          destination
        );

      return res.status(200).json({
        success: true,
        data
      });

    } catch (error) {

      return res.status(404).json({
        success: false,
        message: error.message
      });
    }
};

const generateTravelAdvice =
  async (req, res) => {

    try {

      const data =
        await generateTravelAdviceService(
          req.body
        );

      return res.status(200).json({
        success: true,
        data
      });

    } catch (error) {

      return res.status(404).json({
        success: false,
        message: error.message
      });
    }
};

const getAllDestinations =
  async (req, res) => {

    try {

      const data =
        await getAllDestinationsService();

      return res.status(200).json({
        success: true,
        data
      });

    } catch (error) {

      return res.status(500).json({
        success: false,
        message: error.message
      });
    }
};

const getRegions =
  async (req, res) => {

    try {

      const data =
        await getRegionsService();

      return res.status(200).json({
        success: true,
        data
      });

    } catch (error) {

      return res.status(500).json({
        success: false,
        message: error.message
      });
    }
};

const getDestinationsByRegion =
  async (req, res) => {

    try {

      const { region } =
        req.params;

      const data =
        await getDestinationsByRegionService(
          region
        );

      return res.status(200).json({
        success: true,
        data
      });

    } catch (error) {

      return res.status(404).json({
        success: false,
        message: error.message
      });
    }
};

const searchDestinations =
  async (req, res) => {

    const { keyword } =
      req.params;

    const data =
      await searchDestinationsService(
        keyword
      );

    return res.status(200).json({
      success: true,
      data
    });
};

export {

  getPlaceInsights,

  generateTravelAdvice,

  getAllDestinations,

  getRegions,

  getDestinationsByRegion,

  searchDestinations
};