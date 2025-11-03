import express from 'express';
import { createCategory, getCategories } from '../controllers/categoryController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';
const router = express.Router();

router.post('/', authMiddleware(['admin']), createCategory);
router.get('/', authMiddleware(), getCategories);

export default router;
