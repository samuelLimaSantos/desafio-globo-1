import { Movie } from './../../entity/movie.entity';
import { database } from "../../../../shared/fakeDatabase";

export class ListWatchLaterListService {
  static execute(): Movie[] {
    return database.watchLaterList;
  }
}