const mongoose = require("mongoose");

const OpinionSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true
  },
  opinion: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  }
});

const OpinionModel = mongoose.model("opinion", OpinionSchema);

module.exports = OpinionModel;