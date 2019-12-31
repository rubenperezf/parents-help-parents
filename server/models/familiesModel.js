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
    type: Array,
    required: true
  },
  parentsAge: {
    type: Array,
    required: true
  },
  kidsName: {
    type: Array,
    required: true
  },
  kidsAge: {
    type: Array,
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
  }
});

const FamiliesModel = mongoose.model("families", FamiliesSchema);

module.exports = FamiliesModel;
