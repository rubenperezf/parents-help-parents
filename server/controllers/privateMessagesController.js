const PrivateMessagesModel = require("../models/PrivateMessagesModel");

const postPrivateMessages = async (req, res) => {
  try {
    console.log("post Private Messages");

    var PrivateMessagesInstance = new PrivateMessagesModel(req.body);
    const created = await PrivateMessagesModel.create(PrivateMessagesInstance);
    res.send(created);
  } catch (err) {
    res.status(500).send(err);
  }
};

const getPrivateMessage = async (req, res) => {
  try {
    console.log("GET PrivateMessages");

    var PrivateMessagesInstance = await PrivateMessagesModel.find({});
    console.log(PrivateMessagesInstance);

    res.send(PrivateMessagesInstance);
  } catch (err) {
    res.status(500).send(err);
  }
};

const putPrivateMessages = async (request, response) => {
  try {
    var PrivateMessagesInstance = await PrivateMessagesModel.findOneAndUpdate(
      { _id: request.params.id },
      request.body,
      { useFindAndModify: false }
    );
    console.log(PrivateMessagesInstance);
    response.send(PrivateMessagesInstance);
  } catch (error) {
    response.status(500).send(error);
  }
};

const getPrivateMessages = async (request, response) => {
  try {
    const PrivateMessagesInstance = await PrivateMessagesModel.find({
      _id: request.params.id
    });
    response.send(PrivateMessagesInstance);
  } catch (err) {
    response.status(500).send(err);
  }
};

const deletePrivateMessages = async (request, response) => {
  try {
    const PrivateMessagesInstance = await PrivateMessagesModel.deleteOne({
      _id: request.params.id
    });
    response.send(PrivateMessagesInstance);
  } catch (err) {
    response.status(500).send(err);
  }
};

module.exports = {
  getPrivateMessage,
  postPrivateMessages,
  putPrivateMessages,
  getPrivateMessages,
  deletePrivateMessages
};
