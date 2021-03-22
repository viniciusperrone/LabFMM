import { Router, Request, Response } from 'express';

import { UserController } from '../../../../controllers/UserController';

const router = Router();

const userController = new UserController();

router.post('/register-use', userController.create);

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
