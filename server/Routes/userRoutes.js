import express from 'express';
import setApt from '../Controllers/aptController.js';
import {createUser, getUser, updateUser, deleteUser} from '../Controllers/userController.js';

const router = express.Router();
router.route('/appointments/:id').post(setApt);
router.route('/register').post(createUser);
router.route('/').get(getUser);
router.route('/:id').put(updateUser).delete(deleteUser);

export default router;