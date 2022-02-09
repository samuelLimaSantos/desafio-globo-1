import { Router, Request, Response } from 'express';

const watchLaterRouter = Router();

watchLaterRouter.get('/', (request: Request, response: Response) => {
    return response.json({ message: 'Hello Worldd' });
})

export { watchLaterRouter };