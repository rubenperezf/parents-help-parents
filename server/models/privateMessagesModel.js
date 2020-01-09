const mongoose = require("mongoose");

const PrivateMessagessSchema = new mongoose.Schema({
  users: {
    type: Array,
    required: false
  },
  messages: {
    type: Array,
    required: false
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
  userEmail: {
    type: String,
    required: true
  },
  interested: {
    type: Array,
    required: false
  },
  notificationsReaded: {
    type: Array,
    required: false
  }
});

const PrivateMessagessModel = mongoose.model("PrivateMessagess", PrivateMessagessSchema);

module.exports = PrivateMessagessModel;
