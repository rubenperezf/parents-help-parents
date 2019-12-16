const mongoose = require("mongoose")

const FamilyReviewsSchema = new mongoose.Schema({
    familyId: {
        type: String,
        required: true
    },
    review: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    familyName: {
        type: String,
        required: true,
    }
})

const FamilyReviewsModel = mongoose.model("familyReviews", FamilyReviewsSchema)

module.exports = FamilyReviewsModel