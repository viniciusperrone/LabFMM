import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send('Page Login')
});

router.get('/register-adm', (req: Request, res: Response) => {
  res.send('Page Register Adm')
});

router.get('/password', (req: Request, res: Response) => {
  res.send('Password')
});

router.get('/home-adm', (req: Request, res: Response) => {
  res.send('Page Home Adm')
});

router.get('/adm-labs', (req: Request, res: Response) => {
  res.send('Page Adm Labs')
});

router.get('/adm-teachers', (req: Request, res: Response) => {
  res.send('Page Adm Teachers')
});

export default router;
