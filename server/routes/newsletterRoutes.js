const newsletterFunctions = require("../controllers/newsletterController");

const routes = app => {
  app
    .route("/newsletter")
    .get(newsletterFunctions.getNewsletterEmails)
    .post(newsletterFunctions.postNewsletterEmail);

  app
    .route("/newsletter/:id")
    .put(newsletterFunctions.putNewsletterEmail)
    .get(newsletterFunctions.getNewsletterEmail)
    .delete(newsletterFunctions.deleteNewsletterEmail);
};

module.exports = { routes };