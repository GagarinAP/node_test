import { Router } from 'express';
import {
		oneRouter,
		twoRouter,
		threeRouter
} from './v1'

const v1 = Router();

v1.use('/one', oneRouter);
v1.use('/two', twoRouter);
v1.use('/three', threeRouter);

export default v1;
