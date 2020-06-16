const Router = require("express");
const controllers = require("./user.controllers.js");

const router = Router();

router.route("/").get(controllers.getMany).post(controllers.createOne);
router.route("/:id").get(controllers.getOne).put(controllers.updateOne);

module.exports = router;
