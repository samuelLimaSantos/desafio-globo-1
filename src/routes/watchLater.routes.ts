import { Router } from 'express';
import { ListWatchLaterListController } from './../modules/watchLater/useCases/listWatchLaterList/listWatchLaterList.controller';
import { AddToWatchLaterController } from './../modules/watchLater/useCases/addToWatchLater/addToWatchLater.controller';

const watchLaterRouter = Router();
const listWatchLaterListController = new ListWatchLaterListController();
const addToWatchLaterController = new AddToWatchLaterController();

watchLaterRouter.get('/', listWatchLaterListController.listWatchLaterList)

watchLaterRouter.post('/', addToWatchLaterController.addToWatchLaterList);

export { watchLaterRouter };