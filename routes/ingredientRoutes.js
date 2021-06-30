const express = require("express");
const router = express.Router();

router.param("ingredientId", async (req, res, next, ingredientId) => {
  const ingredient = await fetchIngredient(ingredientId, next);
  if (ingredient) {
    req.ingredient = ingredient;
    next();
  } else {
    const err = new Error("Ingredient Not Found");
    err.status = 404;
    next(err);
  }
});

router.get("/", ingredientsList);

router.post("/:ingredientId/cuisines", upload.single("image"), cuisinesCreate);

module.exports = router;
