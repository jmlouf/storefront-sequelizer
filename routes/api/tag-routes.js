const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// find all tags
// be sure to include its associated Product data
router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Products
  try {
    const tagsData = await Tag.findAll({
      include: [Product],
    });
    res.status(200).json(tagsData);
  } catch (err) {
    res.status(500).json(err);
  };
});

router.get('/:id', async (req, res) => {
  // find one tag by its `id` value
  // be sure to include its associated Products
  try {
    const tagsData = await Tag.findByPk(req.params.id, {
      include: [Product],
    });

    if (!tagsData) {
      res.status(404).json({ message: 'No tag found with this id' });
    }
    res.status(200).json(tagsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const tagsData = await Tag.create(req.body);
    res.status(200).json(tagsData);
  } catch (err) {
    res.status(400).json(err)
  };
});

router.put('/:id', async (req, res) => {
  try {
    const tagsData = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!tagsData) {
      res.status(404).json({ message: 'No tags with this id' });
      return;
    }
    res.status(200).json(tagsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const tagsData = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!tagsData) {
      res.status(404).json({ message: 'No tag found with this id' });
      return;
    }

    res.status(200).json(tagsData);
  } catch (err) {
    res.status(500).json(err);
  };
});

module.exports = router;