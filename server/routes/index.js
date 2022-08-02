const express = require("express");
const router = express.Router();

const auth = require("./auth");
const post = require("./post");

const Neigh = require("../models/neighbor");

router.get("/api/v1", async (req, res)=>{
   let _n = new Neigh;

   _n.myName = "aaa";
   _n.youName = "play";
   _n.status = "f";

   await _n.save();

   await res.json({ data: _n });
});

router.use("/api/auth", auth);
router.use("/api/post", post);

module.exports = router;