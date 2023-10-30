const Todo = require("../models/todo");

exports.index = async (req, res) => {
  const todos = await Todo.find();

  res.status(200).json({
    data: todos,
    message: "Successfully get data",
  });
};

exports.getById = async (req, res) => {
  try {
    const { id } = req.params;

    const todo = await Todo.findById(id);

    res.status(200).json({
      data: todo,
      message: "Successfully get data",
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

exports.insert = async (req, res) => {
  const { title, isChecked } = req.body;

  const todo = new Todo({
    title,
    isChecked,
  });

  await todo.save();

  res.status(201).json({
    message: "Successfully add data",
    data: todo,
  });
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const { title, isChecked } = req.body;

  const todo = await Todo.findByIdAndUpdate(id, {
    title,
    isChecked,
  });

  res.status(200).json({
    message: "Successfully updated data",
  });
};

exports.destroy = async (req, res) => {
  try {
    const { id } = req.params;

    const isExisted = await Todo.findOne({ _id: id });

    if (!isExisted) {
      res.status(404).json({
        message: "No Id founded",
      });
    }

    await Todo.findByIdAndDelete(id);

    res.status(200).json({
      message: "Successfully deleted data",
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};
