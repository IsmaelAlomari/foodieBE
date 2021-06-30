const { Cuisine } = require("../db/models");

exports.getCuisines = async (req, res, next) => {
  try {
    const cuisinesData = await Cuisine.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    res.json(cuisinesData);
  } catch (error) {
    next(error);
  }
};

exports.fetchCuisine = async (cuisineId, next) => {
  try {
    const foundCuisine = await Cuisine.findByPk(cuisineId); //2
    return foundCuisine;
  } catch (error) {
    next(error);
  }
};
