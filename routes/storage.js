const express = require('express');
const router = express.Router();
const uploadMidleware = require('../utils/handleStorage');
const {validatorGetItem} = require("../validators/storage");
const { getItem, getItems, deleteItem, createItem } = require('../controllers/storage');


// lista de items
router.get('/', getItems);

// obtener un item por id
router.get('/:id', validatorGetItem, getItem);

// eliminar item
router.delete('/:id', validatorGetItem, deleteItem);

// crea un item
router.post('/', uploadMidleware.single("myfile"), createItem);

module.exports = router;     