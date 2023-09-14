import express from 'express';
// import {getApt} from '../Controllers/aptController.js';
import {createLawyer, getLawyer, updateLawyer, deleteLawyer} from '../Controllers/lawyerController.js';

const router = express.Router();
router.route('/register').post(createLawyer);
router.route('/').get(getLawyer);
router.route('/:id').put(updateLawyer).delete(deleteLawyer);
// router.route('/appointments').get(getApt);

export default router;