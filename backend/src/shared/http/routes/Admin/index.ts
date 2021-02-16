import { Router, Request, Response } from 'express';

const router = Router(); 

router.get('/register-adm', ( req: Request, res: Response) => {
  res.send('Page register adm');
});

router.get('/home-adm', ( req: Request, res: Response) => {
  res.send('Page initial adm');
});

router.get('/adm-teachers', ( req: Request, res: Response) => {
  res.send('Page adm teachers');
});

router.get('/adm-labs', ( req: Request, res: Response) => {
  res.send('Page adm labs');
});

export default router;