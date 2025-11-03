import Contribution from '../models/Contribution.js';

export const createContribution = async (req, res) => {
  try {
    const data = { ...req.body, collectorId: req.user.id };
    const doc = await Contribution.create(data);
    res.json(doc);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

export const getContributions = async (req, res) => {
  const docs = await Contribution.find()
    .populate('collectorId', 'name')
    .populate('categoryId', 'name')
    .sort('-createdAt');
  res.json(docs);
};
