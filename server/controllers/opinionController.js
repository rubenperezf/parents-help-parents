const OpinionModel = require("../models/opinionModel");

const postOpinion = async (req, res) => {
  try {
    console.log("post Opinion");
    var OpinionInstance = new OpinionModel(req.body);
    const created = await OpinionModel.create(OpinionInstance);
    res.send(created);
  } catch (err) {
    res.status(500).send(err);
  }
};

const getOpinions = async (req, res) => {
  try {
    console.log("Get opinions");

    var OpinionInstance = await OpinionModel.find({});
    console.log(OpinionInstance);
    res.send(OpinionInstance);
  } catch (err) {
    res.statu(500).send(err);
  }
};

const putOpinion = async (req, res) => {
  try {
    var OpinionInstance = await OpinionModel.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { useFindAndModify: false }
    );
    console.log(OpinionInstance);
    res.send(OpinionInstance);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getOpinion = async (req, res) => {
  try {
    const OpinionInstance = await OpinionModel.find({
      _id: request.params.id
    });
    res.send(OpinionInstance);
  } catch (err) {
    res.status(500).send(err);
  }
};

const deleteOpinion = async (req, res) => {
  try {
    const OpinionInstance = await OpinionModel.deleteOne({
      _id: req.params.id
    });
    res.send(OpinionInstance);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  getOpinions,
  postOpinion,
  putOpinion,
  getOpinion,
  deleteOpinion
};
