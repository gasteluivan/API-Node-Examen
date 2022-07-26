const fs = require("fs");
const { matchedData } = require("express-validator");
const { storgeModel } = require("../models");
const { handleHttpError } = require("../utils/handleError");
const storage = require("../models/nosql/storage");

const PUBLIC_URL = process.env.PUBLIC_URL;
const MEDIA_PATH = `${__dirname}/../storage`;

// lista de todos los tracks
const getItems = async (req, res) => {
  try {
    const data = await storgeModel.find({});
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR OBTENER ITEMS", e.code);
  }
};

// obtener un track por id
const getItem = async (req, res) => {
  try {
    const { id } = matchedData(req);
    const data = await storgeModel.findById(id);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR BUSCANDO ITEM", e.code);
  }
};

// crea un track
const createItem = async (req, res) => {
  try {
    const { file } = req;
    const fileData = {
      filename: file.filename,
      url: `${PUBLIC_URL}/${file.filename}`,
    };
    const data = await storgeModel.create(fileData);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR CREANDO ITEM", e.code);
  }
};

// elimina un track
const deleteItem = async (req, res) => {
  try {
    const { id } = matchedData(req);
    const dataFile = await storgeModel.findById(id);
    await storgeModel.deleteOne({ _id: id });
    const { filename } = dataFile;
    const filePath = `${MEDIA_PATH}/${filename}`;
    // persiste la data en los servidores
    // fs.unlinkSync(filePath);
    const data = {
      filePath,
      deleted: true,
    };
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR ELIMINAR ITEM", e.code);
  }
};

module.exports = { getItems, getItem, createItem, deleteItem };
