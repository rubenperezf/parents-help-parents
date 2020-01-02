const contactUsRouteFunctions = require("../controllers/contactUsController");

const routes = app => {
  app
    .route("/contactus")
    .get(contactUsRouteFunctions.getContacts)
    .post(contactUsRouteFunctions.postContact);

  app
    .route("/contactus/:id")
    .put(contactUsRouteFunctions.putContact)
    .get(contactUsRouteFunctions.getContact)
    .delete(contactUsRouteFunctions.deleteContact);
};

module.exports = { routes };
