const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this is mogosse creating a schema for us
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
  },
  //this will generate timestamps for us incase we update something
  { timestamps: true }
);

// it will look for blogs in the model, second one is what type of schema, which we just created
const User = mongoose.model("User", userSchema);
module.exports = User;
