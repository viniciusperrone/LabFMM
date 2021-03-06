import { Router, Request, Response } from 'express';

import connection from '../../../../database/connection';

import { AdminController } from '../../../../controllers/AdminController';

const router = Router(); 

const adminController = new AdminController();


router.post('/register-adm', adminController.create);

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