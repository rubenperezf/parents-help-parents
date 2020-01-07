const mongoose = require("mongoose");

const FamiliesSchema = new mongoose.Schema({
  familyName: {
    type: String,
    required: true
  },
  numberOfKids: {
    type: String,
    required: true
  },
  parentsName: {
    type: String,
    required: true
  },
  parentsAge: {
    type: String,
    required: true
  },
  kidsName: {
    type: String,
    required: true
  },
  kidsAge: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  images: {
    type: Array,
    required: true
  },
  userName: {
    type: String,
    required: true
  },
  interested: {
    type: Array,
    required: false
  }
});

const FamiliesModel = mongoose.model("families", FamiliesSchema);

module.exports = FamiliesModel;
