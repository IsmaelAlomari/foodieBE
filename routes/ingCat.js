const express = require("express");
const router = express.Router();

router.param("ingCatId", async (req, res, next, ingCatId) => {
  const ingCat = await fetchIngCat(cuisineId, next);
  if (ingCat) {
    req.ingCat = ingCat;
    next();
  } else {
    const err = new Error("ingCat Not Found");
    err.status = 404;
    next(err);
  }
});

router.get("/", ingCatsList);

router.post("/", ingCatsCreate);
router.get("/:ingCattId", ingCatsDetails);

module.exports = router;
