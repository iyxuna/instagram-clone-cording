const express = require("express");
const router = express.Router();

const Post = require("../models/post");

router.get("/", async (req, res)=>{
   const _me = req.passport;
   console.log("_me : " , _me);
   const result = await Post.find().exec();

   res.json({ data: result });
});

// 글 작성
router.post("/write", async (req, res)=>{
   const result = req.body;

   const newPost = new Post();
   newPost.image = result.image;
   newPost.contents = result.contents;
   newPost.tag = result.tag;
   await newPost.save();

   await res.json({ data: newPost, success: true });
});

module.exports = router;