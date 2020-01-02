const ContactUsModel = require("../models/contactUsModel");

const postContact = async (req, res) => {
  try {
    console.log("post contact");
    var ContactUsInstance = new ContactUsModel(req.body);
    const created = await ContactUsModel.create(ContactUsInstance);
    res.send(created);
  } catch (err) {
    res.status(500).send(err);
  }
};

const getContacts = async (req, res) => {
  try {
    console.log("Get Contacts");

    var ContactUsInstance = await ContactUsModel.find({});
    console.log(ContactUsInstance);
    res.send(ContactUsInstance);
  } catch (err) {
    res.statu(500).send(err);
  }
};

const putContact = async (req, res) => {
  try {
    var ContactUsInstance = await ContactUsModel.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { useFindAndModify: false }
    );
    console.log(ContactUsInstance);
    res.send(ContactUsInstance);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getContact = async (req, res) => {
  try {
    const ContactUsInstance = await ContactUsModel.find({
      _id: request.params.id
    });
    res.send(ContactUsInstance);
  } catch (err) {
    res.status(500).send(err);
  }
};

const deleteContact = async (req, res) => {
  try {
    const ContactUsInstance = await ContactUsModel.deleteOne({
      _id: req.params.id
    });
    res.send(ContactUsInstance);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  getContacts,
  postContact,
  putContact,
  getContact,
  deleteContact
};
