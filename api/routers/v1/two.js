import { Router } from 'express';
import { two } from './../../controllers';

const twoRouter = Router();

twoRouter.get('/', two.get);
twoRouter.get('/:id', two.getid);
twoRouter.post('/', two.post);
twoRouter.put('/:id', two.put);
twoRouter.delete('/:id', two.del);

export default twoRouter;
