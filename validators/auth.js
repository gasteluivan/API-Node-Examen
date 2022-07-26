const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator");

const validatorRegistro = [
  check("name").exists().notEmpty().isLength({ min: 3, max: 99 }),
  check("age").exists().notEmpty().isNumeric(),
  check("password").exists().notEmpty().isLength({ min: 3, max: 40 }),
  check("email").exists().notEmpty().isEmail(),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

const validatorLogin = [
    check("password").exists().notEmpty().isLength({ min: 3, max: 40 }),
    check("email").exists().notEmpty().isEmail(),
    (req, res, next) => {
      return validateResults(req, res, next);
    },
  ];

module.exports = { validatorRegistro, validatorLogin };
