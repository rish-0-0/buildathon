import { Router } from 'express';
import { signup, check } from '../controllers/auth.controller';

const router = Router();



router.get('/', (req, res) => res.json({'text' : 'Welcome to the buildathon API'}));
router.post('/auth/signup', signup);
router.post('/auth/check', check);

export default router;