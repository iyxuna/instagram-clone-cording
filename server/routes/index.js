const express = require("express");
const router = express.Router();

const auth = require("./auth");
const post = require("./post");

router.get("/api/v1", (req, res)=>{
   res.json({ data: "/api/v1" });
});

router.use("/api/auth", auth);
router.use("/api/post", post);

module.exports = router;