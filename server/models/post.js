const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    image: { type: String },
    contents: { type: String },
    tag: { type: String }
});

module.exports = mongoose.model("post", postSchema, "post");