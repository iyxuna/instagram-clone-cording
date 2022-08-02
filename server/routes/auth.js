const express = require("express");
const router = express.Router();
const passport = require("../lib/passport");

const User = require("../models/user");

router.get("/", async (req, res)=>{
   const findUser = await User.findOne({name: "aaa"}).exec();
   const user = findUser ? true : false;

   res.json({ data: user });
});

// 회원가입
router.post("/signup", async (req, res)=>{
   const result = req.body;

   // const findUser = await User.findOne({ name: result.name }).exec();
   // const userFlag = findUser ? true : false;

   const newUser = new User();

   newUser.email = result.email;
   newUser.name = result.name;
   newUser.nickname = result.nickname;
   newUser.password = result.password;

   await newUser.save();
   res.json({ data: newUser, success: true });
});

// 로그인
router.post("/", passport.authenticate("local", {failureRedirect: "/"}),
   (req, res)=>{
   res.json({ user: req.user });
});

module.exports = router;