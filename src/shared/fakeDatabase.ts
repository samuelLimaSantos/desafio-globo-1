import { Movie } from './../modules/watchLater/entity/movie.entity';

export enum Rating {
  BAD = 'BAD',
  GOOD = 'GOOD',
  EXCELLENT = 'EXCELLENT',
}

export interface IFakeDatabase {
  watchLaterList: Movie[];
}

export const database: IFakeDatabase = {
  watchLaterList: [
    {
      id: 'bfe13127-4d56-4fbb-8626-96903017410c',
      title: 'The Shawshank Redemption',
      director: 'Frank Darabont',
      releasedYear: 1994,
      rating: Rating.GOOD,
    }
  ]
}
