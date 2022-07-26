const express = require("express");
const {loginCtrl, registerCtrl} = require("../controllers/auth");
const router = express.Router();
const { validatorRegistro, validatorLogin } = require("../validators/auth");

router.post("/login", validatorLogin, loginCtrl);

router.post("/register", validatorRegistro, registerCtrl);

module.exports = router;
