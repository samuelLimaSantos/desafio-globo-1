import { database, IMovie } from './../../../../shared/fakeDatabase';
import { v4 as uuid } from 'uuid';

export class AddToWatchLaterService {
  constructor() { }

  static execute(movie: IMovie): IMovie {
    const alreadyHasMovie = database
      .watchLaterList
      .find(movieItem => movieItem.title === movie.title);

    if (alreadyHasMovie) throw new Error('Movie already in watch later list');

    Object.assign(movie, { id: uuid() });

    database.watchLaterList.push(movie);
    return movie;
  }
}