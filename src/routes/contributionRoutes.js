import express from 'express';
import { createContribution, getContributions } from '../controllers/contributionController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';
const router = express.Router();

router.post('/', authMiddleware(['admin', 'women_member', 'gents_member']), createContribution);
router.get('/', authMiddleware(), getContributions);

export default router;
