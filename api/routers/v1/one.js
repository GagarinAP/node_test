import { Router } from 'express';
import { one } from './../../controllers';

const oneRouter = Router();

oneRouter.get('/', one.get);
oneRouter.get('/:id', one.getid);
oneRouter.post('/', one.post);
oneRouter.put('/:id', one.put);
oneRouter.delete('/:id', one.del);

export default oneRouter;
