const familyReviewsRouteFunctions = require("../controllers/familyReviewsController");

const routes = app => {
  app
    .route("/familyReviews")
    .get(familyReviewsRouteFunctions.getFamilyReviews)
    .post(familyReviewsRouteFunctions.postFamilyReviews);

  app
    .route("/familyReview/:id")
    .put(familyReviewsRouteFunctions.putFamilyReview)
    .get(familyReviewsRouteFunctions.getFamilyReview)
    .delete(familyReviewsRouteFunctions.deleteFamilyReview);
};

module.exports = { routes };
