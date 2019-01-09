const router = require('express').Router();

const Item = require('../models/item');

router.get('/', async (req, res, next) => {
  const items = await Item.find({});
  res.render('index', {items});
});

router.get('/items/create', async (req, res, next) => {
  res.render('create');
});

router.get('/items/:item_id', async (req, res, next) => {
	const id = req.params.item_id;
	const item = await Item.findById(id);
  	res.render('single', {item});
});

router.post('/items/create', async (req, res, next) => {
  const {title, description, imageUrl} = req.body;
  const item = new Item({title, description, imageUrl});

  item.validateSync();

  if (item.errors) {
  	res.status(400).render('create', {item: item});
  } else {
  	await item.save();
  	res.redirect('/');
  }
});

router.post('/items/:item_id/delete', async (req, res, next) => {
	const id = req.params.item_id;
	const item = await Item.findById(id);

	item.remove();
  	res.redirect('/');
});

module.exports = router;
