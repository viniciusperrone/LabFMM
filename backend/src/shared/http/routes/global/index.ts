import { Router, Request, Response } from 'express';

const router = Router();

import { PublicController } from '../../../../controllers/PublicController';

const publicController = new PublicController();

router.post('/', publicController.signIn);

router.get('/password', ( req: Request, res: Response) => {
  res.send('Page password');
});

export default router;