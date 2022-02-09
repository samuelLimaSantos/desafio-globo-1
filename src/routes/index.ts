import { Router } from 'express';
import { watchLaterRouter } from './watchLater.routes';

const routes = Router();

routes.use('/watch-later', watchLaterRouter);

export { routes };