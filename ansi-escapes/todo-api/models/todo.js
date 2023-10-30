const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema(
  {
    title: { type: String, required: true },
    isChecked: { type: Boolean, default: false },
  },
  {
    collection: "todos",
    timestamps: true,
  }
);

const model = mongoose.model("Todo", schema);

module.exports = model;
