import {Router} from 'express';
import {three} from './../../controllers';

const threeRouter = Router();

threeRouter.get('/', three.get);
threeRouter.get('/:id', three.getid);
threeRouter.post('/', three.post);
threeRouter.put('/:id', three.put);
threeRouter.delete('/:id', three.del);

export default threeRouter;