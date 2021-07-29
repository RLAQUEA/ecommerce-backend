const router = require('express').Router();
const { Category, Product } = require('../../models');

// find all categories
// be sure to include its associated Products
router.get('/', async (req, res) => {
  try {
    const allCategories = await Category.findAll({ include: [{ model: Product }] });
    res.status(200).json(allCategories);
  } catch (err) {
    res.status(500).json(err);
  }
});


// find one category by its `id` value
// be sure to include its associated Products
router.get('/:id', async (req, res) => {
  try {
    const categoryId = req.params.id
    const categoryInfo = await Category.findOne({
      where: { id: categoryId },
      include: [{ model: Product }]
    });
    res.status(200).json(categoryInfo);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const categoryName = await Category.create({ category_name: req.body.category_name });
    res.status(200).json(categoryName);
  } catch (err) {
    res.status(400).json(err);
  }
});


router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const updateCategory = await Category.create({
      category_name: req.body.category_name
    },
      {
        where: {
          id: req.params.id
        }
      }
    );
    res.status(200).json(updateCategory);
  }
  catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const deletedCategory = await Category.destroy({
        where: {
          id: req.params.id
        }
      }
    );
    res.status(200).json(deletedCategory);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
