const { matchedData } = require("express-validator");
const { tokenSign } = require("../utils/handleJwt");
const { encrypt, compare } = require("../utils/handlePassword");
const { handleHttpError } = require("../utils/handleError");
const { usersModel } = require("../models");

const registerCtrl = async (req, res) => {
  req = matchedData(req);
  const passwordHash = await encrypt(req.password);
  const body = { ...req, password: passwordHash };
  const dataUser = await usersModel.create(body);
  // ocultas la contraseña del usuario
  dataUser.set("password", undefined, { strict: false });
  const data = {
    token: await tokenSign(dataUser),
    user: dataUser,
  };
  res.send({ data });
};

const loginCtrl = async (req, res) => {
  try {
    req = matchedData(req);
    const user = await usersModel.findOne({ email: req.email })
    .select("password name role email");
    if (!user) {
      handleError(res, "El usuario no existe", 404);
      return;
    }
    const hashPassword = user.get('password');
    const check = await compare(req.password, hashPassword);
    if (!check) {
      handleHttpError(res, "La contraseña es incorrecta", 401);
      return;
    }
    user.set("password", undefined, { strict: false });
    const data = {
      token: await tokenSign(user),
      user: user,
    };
    res.send({ data });
  } catch (e) {
    handleHttpError(res, e.message, 500);
  }
};

module.exports = { loginCtrl, registerCtrl };
