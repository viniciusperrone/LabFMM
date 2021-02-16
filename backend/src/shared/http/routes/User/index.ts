import { Router, Request, Response } from 'express';

const router = Router();

router.get('/register-use', ( req: Request, res: Response) => {
  res.send('Page register user');
});

router.get('/home-user', ( req: Request, res: Response) => {
  res.send('Page initial');
});

router.get('/plus-user', ( req: Request, res: Response) => {
  res.send('Page plus user');
});

router.get('/agender-user', ( req: Request, res: Response) => {
  res.send('Page agender user');
});

router.get('/view-user', ( req: Request, res: Response) => {
  res.send('Page view user');
});

export default router;
