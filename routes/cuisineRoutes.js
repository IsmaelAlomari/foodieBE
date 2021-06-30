const express = require("express");
const router = express.Router();

const {
  cuisinesList,
  cuisinesCreate,
  cuisinesDetails,
} = require("../controllers/cuisinesController");

router.param("cuisineId", async (req, res, next, cuisineId) => {
  const cuisine = await fetchCuisine(cuisineId, next);
  if (cuisine) {
    req.cuisine = cuisine;
    next();
  } else {
    const err = new Error("Cuisine Not Found");
    err.status = 404;
    next(err);
  }
});

router.get("/", cuisinesList);

router.post("/", cuisinesCreate);
router.get("/:cuisinetId", cuisinesDetails);

module.exports = router;
