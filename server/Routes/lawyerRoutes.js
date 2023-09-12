import express from 'express';
import router from express.Router();
import {getApt} from '../Controllers/aptController.js';

router.route('/appointments').get(getApt);

export default router;