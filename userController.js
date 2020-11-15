const User = require("./userModel");

exports.index = (req, res) => {
  User.get((err, users) => {
    if (err) {
      res.json({
        status: "error",
        message: err,
      });
    }
    res.json({
      status: "success",
      message: "Users retrived successfully",
      data: users,
    });
  });
};

exports.new = (req, res) => {
  const user = new User();
  user.username = req.body.username ? req.body.username : user.username;
  user.credit = req.body.credit;

  user.save((err) => {
    if (err) console.log(err);
    res.json({
      message: "New User Created",
      data: user,
    });
  });
};

exports.view = (req, res) => {
  User.findById(req.params.user_id, (err, user) => {
    if (err) res.send(err);
    res.json({
      message: "User details loading..",
      data: user,
    });
  });
};

exports.update = (req, res) => {
  User.findById(req.params.user_id, (err, user) => {
    if (err) res.send(err);
    user.username = req.body.username ? req.body.username : user.username;
    user.credit = req.body.credit;
  });

  user.save((err) => {
    if (err) res.json(err);
    res.json({
      message: "User Info updated",
      data: user,
    });
  });
};
