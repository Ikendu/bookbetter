const { default: mongoose, model, models } = require("mongoose");

const { Schema } = mongoose;

const UserSchema = Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
});

const UserModal = model("User", UserSchema);

module.exports = UserModal;
