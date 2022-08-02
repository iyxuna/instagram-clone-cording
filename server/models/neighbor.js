const mongoose = require("mongoose");

const neSchema = mongoose.Schema({
    myName: { type: String },
    youName: { type: String },
    status: { type: String }
});

module.exports = mongoose.model("neighbor", neSchema, "neighbor");