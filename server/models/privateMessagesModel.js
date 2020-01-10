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
  writter: {
    type: String,
    required: false
  }
  
});

const PrivateMessagessModel = mongoose.model("PrivateMessagess", PrivateMessagessSchema);

module.exports = PrivateMessagessModel;
