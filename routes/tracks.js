const express = require('express');
const router = express.Router();
const customHeader = require('../middleware/customHeader');
const { validatorCreateItem } = require('../validators/tracks');
const {getItems, getItem, createItem, updateItem, deleteItem} = require('../controllers/tracks');

router.get('/', getItems);
router.post('/', validatorCreateItem, createItem);
// router.post('/', createItem);

// router.get('/:id', getItem);
// router.put('/:id', updateItem);
// router.post('/:id', deleteItem);

module.exports = router;