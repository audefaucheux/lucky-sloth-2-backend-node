const { crudControllers } = require("../../utils/crud");
const User = require("./user.model");

module.exports = crudControllers(User);
