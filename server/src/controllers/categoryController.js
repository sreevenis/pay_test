import Category from '../models/Category.js';

export const createCategory = async (req, res) => {
  try {
    const cat = await Category.create({ ...req.body, createdBy: req.user.id });
    res.json(cat);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

export const getCategories = async (req, res) => {
  const cats = await Category.find().sort('-createdAt');
  res.json(cats);
};
