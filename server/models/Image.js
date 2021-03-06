const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ImageSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    filePath: {
      type: String,
      required: true,
    },
    fileName: {
      type: String,
      required: true,
    },
    originalFileName: {
      type: String,
      trim: true,
    },
    internalUse: {
      type: String,
      trim: true,
    },
  },
  { collection: "image" }
);

module.exports = mongoose.model("Image", ImageSchema);
