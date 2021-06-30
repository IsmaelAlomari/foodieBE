const { Cuisine, Ingredient } = require("../db/models");

exports.getIngredients = async (req, res, next) => {
  try {
    const librariesData = await Ingredient.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      include: {
        model: Cuisine,
        as: "cuisines", // alias
        attributes: ["id"],
      },
    });
    res.json(librariesData);
  } catch (error) {
    next(error);
  }
};

exports.createIngredient = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.img = `http://${req.get("host")}/${req.file.path}`;
    }
    const newIngredient = await Ingredient.create(req.body);
    res.status(201).json(newIngredient);
  } catch (error) {
    next(error);
  }
};

exports.createCuisine = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.img = `http://${req.get("host")}/${req.file.path}`;
    }
    // req.body.ingredientId = req.params.ingredientId;
    req.body.ingredientId = req.ingredient.id;
    const newCuisine = await Cuisine.create(req.body);
    res.status(201).json(newCuisine);
  } catch (error) {
    next(error);
  }
};
