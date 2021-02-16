import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', ( req: Request, res: Response) => {
  res.send('Page Sign In');
});

router.get('/password', ( req: Request, res: Response) => {
  res.send('Page password');
});

export default router;