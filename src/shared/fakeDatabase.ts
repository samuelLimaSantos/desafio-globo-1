import * as faker from 'faker';
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
      id: faker.datatype.uuid(),
      title: faker.random.words(),
      director: faker.name.firstName(),
      releasedYear: faker.date.past().getFullYear(),
      rating: Rating.GOOD,
    }
  ]
}
