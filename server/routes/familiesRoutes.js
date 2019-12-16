const familiesRouteFunctions = require('../controllers/familiesController')

const routes = (app) =>{
    app.route('/families')
    .get(familiesRouteFunctions.getFamilies)
    .post(familiesRouteFunctions.postFamily)

    app.route('/family/:id')
    .put(familiesRouteFunctions.putFamily)
    .get(familiesRouteFunctions.getFamily)
    .delete(familiesRouteFunctions.deleteFamily)
}


module.exports = {routes}