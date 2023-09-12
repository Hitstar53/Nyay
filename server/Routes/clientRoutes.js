import express from 'express';
import setApt from '../Controllers/aptController.js';
import createUser from '../Controllers/userController.js';

const router = express.Router();
router.route('/appointments/:id').post(setApt);
router.route('/register').post(createUser);

export default router;