const opinionRouteFunctions = require("../controllers/opinionController");

const routes = app => {
  app
    .route("/opinion")
    .get(opinionRouteFunctions.getOpinions)
    .post(opinionRouteFunctions.postOpinion);

  app
    .route("/opinion/:id")
    .put(opinionRouteFunctions.putOpinion)
    .get(opinionRouteFunctions.getOpinion)
    .delete(opinionRouteFunctions.deleteOpinion);
};

module.exports = { routes };