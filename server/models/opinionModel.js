const mongoose = require("mongoose");

const OpinionSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true
  },
  opinion: {
    type: String,
    required: true
  },
  rating: {
    type: String,
    required: true
  }
});

const OpinionModel = mongoose.model("opinion", OpinionSchema);

module.exports = OpinionModel;