const privateMessagesRouteFunctions = require("../controllers/privateMessagesController");

const routes = app => {
  app
    .route("/privateMessages")
    .get(privateMessagesRouteFunctions.getPrivateMessage)
    .post(privateMessagesRouteFunctions.postPrivateMessages);

  app
    .route("/PrivateMessages/:id")
    .put(privateMessagesRouteFunctions.putPrivateMessages)
    .get(privateMessagesRouteFunctions.getPrivateMessages)
    .delete(privateMessagesRouteFunctions.deletePrivateMessages);
};

module.exports = { routes };
