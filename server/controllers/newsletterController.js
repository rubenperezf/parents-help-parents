const NewsletterModel = require("../models/NewsletterModel");

const postNewsletterEmail = async (req, res) => {
  try {
    console.log("post Newsletter Email");
    var NewsletterInstance = new NewsletterModel(req.body);
    const created = await NewsletterModel.create(NewsletterInstance);
    res.send(created);
  } catch (err) {
    res.status(500).send(err);
  }
};

const getNewsletterEmails = async (req, res) => {
  try {
    console.log("Get Newsletter Emails");

    var NewsletterInstance = await NewsletterModel.find({});
    console.log(NewsletterInstance);
    res.send(NewsletterInstance);
  } catch (err) {
    res.statu(500).send(err);
  }
};

const putNewsletterEmail = async (req, res) => {
  try {
    var NewsletterInstance = await NewsletterModel.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { useFindAndModify: false }
    );
    console.log(NewsletterInstance);
    res.send(NewsletterInstance);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getNewsletterEmail = async (req, res) => {
  try {
    const NewsletterInstance = await NewsletterModel.find({
      _id: request.params.id
    });
    res.send(NewsletterInstance);
  } catch (err) {
    res.status(500).send(err);
  }
};

const deleteNewsletterEmail = async (req, res) => {
  try {
    const NewsletterInstance = await NewsletterModel.deleteOne({
      _id: req.params.id
    });
    res.send(NewsletterInstance);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  getNewsletterEmails,
  postNewsletterEmail,
  putNewsletterEmail,
  getNewsletterEmail,
  deleteNewsletterEmail
};
