// get put patch delete
// get
// use
// trang dau la get 
// link sau thi dung use

const express = require("express");
const router = express.Router();
const controller = require("../../controllers/admin/dashboard.controller")

router.get('/', controller.dashboard)

module.exports = router;