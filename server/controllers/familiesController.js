const FamiliesModel = require("../models/familiesModel");

const postFamily = async (req, res) => {
  try {
    console.log("post FAMILY");

    var FamilyInstance = new FamiliesModel(req.body);
    const created = await FamiliesModel.create(FamilyInstance);
    res.send(created);
  } catch (err) {
    res.status(500).send(err);
  }
};

const getFamilies = async (req, res) => {
  try {
    console.log("GET FAMILIES");

    var FamiliesInstance = await FamiliesModel.find({});
    console.log(FamiliesInstance);

    res.send(FamiliesInstance);
  } catch (err) {
    res.status(500).send(err);
  }
};

const putFamily = async (request, response) => {
  try {
    var FamiliesInstance = await FamiliesModel.findOneAndUpdate(
      { _id: request.params.id },
      request.body,
      { useFindAndModify: false }
    );
    console.log(FamiliesInstance);
    response.send(FamiliesInstance);
  } catch (error) {
    response.status(500).send(error);
  }
};

const getFamily = async (request, response) => {
  try {
    const FamiliesInstance = await FamiliesModel.find({
      _id: request.params.id
    });
    response.send(FamiliesInstance);
  } catch (err) {
    response.status(500).send(err);
  }
};

const deleteFamily = async (request, response) => {
  try {
    const FamiliesInstance = await FamiliesModel.deleteOne({
      _id: request.params.id
    });
    response.send(FamiliesInstance);
  } catch (err) {
    response.status(500).send(err);
  }
};

module.exports = {
  getFamilies,
  postFamily,
  putFamily,
  getFamily,
  deleteFamily
};
