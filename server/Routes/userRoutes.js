import express from 'express';
import {setApt, getApt} from '../Controllers/aptController.js';
import {getUpdate} from '../Controllers/trackerController.js';
import {createUser, getUser, updateUser, deleteUser, deleteApt} from '../Controllers/userController.js';

const router = express.Router();
router.route('/register').post(createUser);
router.route('/').get(getUser);
router.route('/:id').put(updateUser).delete(deleteUser);
router.route('/tracker/:id').get(getUpdate);
router.route('/appointments/:id').post(setApt);
router.route('/appointments/:id').get(getApt);
router.route('/appointments/:id').delete(deleteApt);

export default router;