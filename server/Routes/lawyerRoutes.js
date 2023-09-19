import express from 'express';
import {getApt, aptAccepted, aptDeclined} from '../Controllers/aptController.js';
import {postUpdate, getUpdate, updateUpdate, deleteUpdate} from '../Controllers/trackerController.js';
import {createLawyer, getLawyer, updateLawyer, deleteLawyer, deleteApt} from '../Controllers/lawyerController.js';

const router = express.Router();
router.route('/register').post(createLawyer);
router.route('/tracker/:id').post(postUpdate);
router.route('/tracker/:id').get(getUpdate);
router.route('/').get(getLawyer);
router.route('/:id').put(updateLawyer).delete(deleteLawyer);
router.route('/appointments/:id').get(getApt);
router.route('/appointments/:id').put(aptAccepted);
router.route('/appointments/:id').delete(deleteApt);
router.route('/appointments/:id').delete(aptDeclined);
router.route('/tracker/:id').delete(deleteUpdate);
router.route('/tracker/:id').put(updateUpdate);

export default router;