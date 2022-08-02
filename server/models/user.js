const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
   email: { type: String },
   name: { type: String },
   nickname: { type: String },
   password: { type: String }
});

module.exports = mongoose.model("user", userSchema, "user");