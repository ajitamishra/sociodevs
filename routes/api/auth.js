const express = require("express");
const router = express.Router();
// @route  GET/auth
// @desc   Test Route
// @access public
router.get("/", (req, res) => res.send("Auth route"));

module.exports = router;
