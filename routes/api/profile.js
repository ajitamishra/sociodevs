const express = require("express");
const router = express.Router();
// @route  GET/profile
// @desc   Test Route
// @access public
router.get("/", (req, res) => res.send("Profile route"));

module.exports = router;