const { matchedData } = require("express-validator");
const { tracksModel } = require("../models");
const {handleHttpError} = require("../middleware/handleError");

// lista de todos los tracks
const getItems = async (req, res) => {
  try {
    const data = await tracksModel.find();
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR GET ITEMS", e.code);
  }
};

// obtener un track por id
const getItem = (req, res) => {};

// crea un track
const createItem = async (req, res) => {
  try {
    const body = matchedData(req);
    const data = await tracksModels.create(body);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR CREANDO ITEM", e.code);
  }
};

// actualiza un track
const updateItem = (req, res) => {};

// elimina un track
const deleteItem = (req, res) => {};

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };
