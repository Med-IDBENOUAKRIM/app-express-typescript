import express from 'express';

import signup from '@src/controllers/auth/register';
import signin from '@src/controllers/auth/login';

const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);

export default router;
