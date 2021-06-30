const express = require("express");
const router = express.Router();

router.param("recipeId", async (req, res, next, recipeId) => {
  const recipe = await fetchRecipe(recipeId, next);
  if (recipe) {
    req.recipe = recipe;
    next();
  } else {
    const err = new Error("Recipe Not Found");
    err.status = 404;
    next(err);
  }
});

router.get("/", recipesList);

router.post("/:recipeId/cuisines", upload.single("image"), cuisinesCreate);

module.exports = router;
