const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this is mogosse creating a schema for us
const exerciseSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  //this will generate timestamps for us incase we update something
  { timestamps: true }
);

// it will look for blogs in the model, second one is what type of schema, which we just created
const Exercise = mongoose.model("Exercize", exerciseSchema);
module.exports = Exercise;
