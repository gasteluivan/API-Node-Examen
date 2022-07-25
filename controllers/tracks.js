const { matchedData } = require("express-validator");
const { tracksModel } = require("../models");
const {handleHttpError} = require("../utils/handleError");


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
const getItem = async (req, res) => {
  try {
    req  = matchedData(req);
    const {id} = req;
    const data = await tracksModel.findById(id);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR GET ITEM", e.code);
  }
};

// crea un track
const createItem = async (req, res) => {
  try {
    const body = matchedData(req);
    const data = await tracksModel.create(body);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR CREANDO ITEM", e.code);
  }
};

// actualiza un track
const updateItem = async (req, res) => {
  try {
    const { id, ...body} = matchedData(req);
    const data = await tracksModel.findOneAndUpdate(
      id, body
    );
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR UPDATE ITEM", e.code);
  }
};

// elimina un track
const deleteItem = async (req, res) => {
  try {
    req  = matchedData(req);
    const {id} = req;
    const data = await tracksModel.delete({_id:id});
    res.send({ data });
  } catch (e) {
    console.log(e);
    handleHttpError(res, "ERROR DELETE ITEM", e.code);
  }
};

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };
