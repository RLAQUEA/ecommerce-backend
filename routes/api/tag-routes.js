const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  // try {
  //   const allTags = await Tag.findAll({ include: [{ model: Product }, {model: ProductTag}] });
  //   res.json(allTags);
  // } catch (err) {
  //   res.status(500).json(err);
  // }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagId = await Tag.findOne({
      where: { id: req.params.id },
      include: [{ model: ProductTag }]
    });
    res.status(200).json(tagId);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const newTag = await Tag.create({
      tag_id: req.body.tag_id
    });
    res.status(200).json(newTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  // try {
  //   const updateTags = await Tag.create({ 
  //     tag_name: req.body.tag_name
  //   });
  //   res.status(200).json(allTags);
  // } catch (err) {
  //   res.status(500).json(err);
  // }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  // try {
  //   const allTags = await Tag.findAll({ include: [{ model: Product }
  //   ] });
  //   res.status(200).json(allTags);
  // } catch (err) {
  //   res.status(500).json(err);
  // }
});

module.exports = router;
