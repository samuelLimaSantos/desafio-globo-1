import { Request, Response } from 'express';
import { ListWatchLaterListService } from './listWatchLaterList.service';

export class ListWatchLaterListController {

  listWatchLaterList(_: Request, response: Response) {
    const movies = ListWatchLaterListService.execute();

    return response.status(200).json(movies);
  }
}