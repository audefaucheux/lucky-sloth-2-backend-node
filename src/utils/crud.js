const getOne = (model) => async (req, res) => {
  try {
    const doc = await model.findById(req.params.id).exec();
    return res.status(200).json({ data: doc });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};

const getMany = (model) => async (req, res) => {
  try {
    const docs = await model.find({}).exec();
    return res.status(200).json({ data: docs });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};

const createOne = (model) => async (req, res) => {
  try {
    const doc = await model.create(req.body);
    return res.status(200).json({ data: doc });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};

const updateOne = (model) => async (req, res) => {
  try {
    const doc = await model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(200).json({ data: doc });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};

const removeOne = (model) => async (req, res) => {
  try {
    const doc = await model.findByIdAndRemove(req.params.id).exec();
    return res.status(200).json({ data: doc });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};
exports.crudControllers = (model) => ({
  removeOne: removeOne(model),
  updateOne: updateOne(model),
  getMany: getMany(model),
  getOne: getOne(model),
  createOne: createOne(model),
});
