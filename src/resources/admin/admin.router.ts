import { Router } from 'express';
import * as AdminController from './admin.controller';

const router = Router();

router.post('/', async (req, res, next) => {
  try {
    const admin = await AdminController.createAdmin(req.body);
    res.status(201).json(admin);
  } catch (error) {
    next(error);
  }
});

router.post('/login', async (req, res, next) => {
  try {
    const result = await AdminController.login(req.body);
    res.json(result);
  } catch (error) {
    next(error);
  }
});

export default router;