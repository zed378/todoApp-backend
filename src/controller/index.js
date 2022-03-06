const { task } = require("../../models");

exports.getTasks = async (req, res) => {
  try {
    const data = await task.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    res.send({
      status: "Success",
      data,
    });
  } catch (error) {
    res.send({
      status: "Failed",
      message: "Server Error",
    });
  }
};

exports.addTask = async (req, res) => {
  try {
    const { name } = req.params;

    const data = await task.create({ name });

    res.send({
      status: "Success",
      data,
    });
  } catch (error) {
    res.send({
      status: "Failed",
      message: "Server Error",
    });
  }
};

exports.editTask = async (req, res) => {
  try {
    const { id } = req.params;
    const name = req.body;

    await task.update(name, {
      where: { id },
    });

    res.send({
      status: "Success",
      message: "Edit Success",
    });
  } catch (error) {
    res.send({
      status: "Failed",
      message: "Server Error",
    });
  }
};

exports.isDone = async (req, res) => {
  try {
    const { id } = req.params;

    await task.update({ isDone: 1 }, { where: { id } });

    res.send({
      status: "Success",
      message: "Update to isDone success",
    });
  } catch (error) {
    res.send({
      status: "Failed",
      message: "Server Error",
    });
  }
};

exports.delTask = async (req, res) => {
  try {
    const { id } = req.params;

    await task.destroy({
      where: { id },
    });

    res.send({
      status: "Success",
      message: "Delete Success",
    });
  } catch (error) {
    res.send({
      status: "Failed",
      message: "Server Error",
    });
  }
};
