const Router = require("express");

const controller = (req, res) => {
  res.send({ message: "hello" });
};

const router = Router();

router.route("/").get(controller).post(controller);
router.route("/:id").get(controller).put(controller);

module.exports = router;
