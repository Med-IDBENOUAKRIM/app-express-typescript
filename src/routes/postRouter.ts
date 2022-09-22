import express from 'express';
import createPost from '@src/controllers/posts/create_posts';
import authMiddleware from '@src/middleware/auth';

const router = express.Router();

router.post('/create', authMiddleware, createPost);

export default router;
