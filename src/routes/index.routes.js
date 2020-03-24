import { Router } from 'express';

const router = Router();



router.get('/', (req, res) => res.json({'text' : 'Welcome to the buildathon API'}));

export default router;