import { Router, Request, Response } from 'express';
import { AddToWatchLaterController } from './../modules/watchLater/useCases/addToWatchLater/addToWatchLater.controller';

const watchLaterRouter = Router();
const addToWatchLaterController = new AddToWatchLaterController();

watchLaterRouter.get('/', (request: Request, response: Response) => {
    return response.json({ message: 'Hello Worldd' });
})

watchLaterRouter.post('/', addToWatchLaterController.addToWatchLaterList);

export { watchLaterRouter };