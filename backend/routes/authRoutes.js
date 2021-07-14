import express from 'express';
import {
	authUser,
	registerUser,
	getUserProfile,
	updatePassword,
} from '../controllers/authControllers.js';
import { protect } from '../middleware/authMiddleware.js';
const router = express.Router();

router.post('/login', authUser);
router.post('/register', registerUser);
router.put('/update/:id', updatePassword);
router.get('/:id', getUserProfile);

export default router;
