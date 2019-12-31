const FamilyReviewsModel = require("../models/familyReviewsModel");

const postFamilyReviews = async (req, res) => {
  try {
    console.log("POST FAMILY REVIEW");
    var FamilyReviewsInstance = new FamilyReviewsModel(req.body);
    const created = await FamilyReviewsModel.create(FamilyReviewsInstance);
    res.send(created);
  } catch (err) {
    res.status(500).send(err);
  }
};

const getFamilyReviews = async (req, res) => {
  try {
    console.log("GET FAMILIES REVIEWS");
    var FamilyReviewsInstance = await FamilyReviewsModel.find({});
    console.log(FamilyReviewsInstance);
    res.send(FamilyReviewsInstance);
  } catch (err) {
    res.status(500).send(err);
  }
};

const putFamilyReview = async (request, response) => {
  try {
    console.log("EDIT FAMILY REVIEW");
    var FamilyReviewsInstance = await FamilyReviewsModel.findOneAndUpdate(
      { _id: request.params.id },
      request.body,
      { useFindAndModify: false }
    );
    console.log(FamilyReviewsInstance);
    response.send(FamilyReviewsInstance);
  } catch (error) {
    response.status(500).send(error);
  }
};

const getFamilyReview = async (request, response) => {
  try {
    console.log("GET FAMILY REVIEW");
    const FamilyReviewsInstance = await FamilyCommentsModel.find({
      _id: request.params.id
    });
    response.send(FamilyReviewsInstance);
  } catch (err) {
    response.status(500).send(err);
  }
};

const deleteFamilyReview = async (request, response) => {
  try {
    console.log("DELETE FAMILY REVIEW");
    const FamilyReviewsInstance = await FamilyReviewsModel.deleteOne({
      _id: request.params.id
    });
    response.send(FamilyReviewsInstance);
  } catch (err) {
    response.status(500).send(err);
  }
};

module.exports = {
  getFamilyReviews,
  postFamilyReviews,
  putFamilyReview,
  getFamilyReview,
  deleteFamilyReview
};
