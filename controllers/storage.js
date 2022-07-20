const { storgeModel } = require("../models");
const PUBLIC_URL = process.env.PUBLIC_URL;

// lista de todos los tracks
const getItems = async (req, res) => {
  const data = await storgeModel.find({});
  res.send({ data });
};

// obtener un track por id
const getItem = (req, res) => {};

// crea un track
const createItem = async (req, res) => {
  const { body, file } = req;
  const fileData = {
    filename: file.filename,
    url: `${PUBLIC_URL}/${file.filename}`,
  }
  const data = await storgeModel.create(fileData);
  res.send({ data });
};

// actualiza un track
const updateItem = (req, res) => {};

// elimina un track
const deleteItem = (req, res) => {};

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };
