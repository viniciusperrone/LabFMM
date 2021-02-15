import { Router, Request, Response } from 'express';

const router = Router();

router.get('/register-user', (req: Request, res: Response) => {
  res.send('Page User Register')
});

router.get('/password', (req: Request, res: Response) => {
  res.send('Password')
});

router.get('/home-user', (req: Request, res: Response) => {
  res.send('Page User Home')
});

router.get('/plus-user', (req: Request, res: Response) => {
  res.send('Page User Plus')
});

router.get('/agender-user', (req: Request, res: Response) => {
  res.send('Page User Agender')
});

router.get('/view-user', (req: Request, res: Response) => {
  res.send('Page User View')
});

export default router;

