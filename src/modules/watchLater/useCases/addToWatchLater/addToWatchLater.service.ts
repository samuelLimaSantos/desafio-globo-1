import { v4 as uuid } from 'uuid';
import { database } from './../../../../shared/fakeDatabase';
import { Movie } from '../../entity/movie.entity';

export class AddToWatchLaterService {
  constructor() { }

  static execute(movie: Movie): Movie {
    const alreadyHasMovie = database
      .watchLaterList
      .find(movieItem => movieItem.title === movie.title);

    if (alreadyHasMovie) throw new Error('Movie already in watch later list');

    Object.assign(movie, { id: uuid() });

    database.watchLaterList.push(movie);
    return movie;
  }
}