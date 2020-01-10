const privateMessagesRouteFunctions = require("../controllers/privateMessagesController");

const routes = app => {
  app
    .route("/private-messages")
    .get(privateMessagesRouteFunctions.getPrivateMessage)
    .post(privateMessagesRouteFunctions.postPrivateMessages);

  app
    .route("/private-messages/:id")
    .put(privateMessagesRouteFunctions.putPrivateMessages)
    .get(privateMessagesRouteFunctions.getPrivateMessages)
    .delete(privateMessagesRouteFunctions.deletePrivateMessages);
};

module.exports = { routes };
