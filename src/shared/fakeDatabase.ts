export enum Rating {
  BAD = 'BAD',
  GOOD = 'GOOD',
  EXCELLENT = 'EXCELLENT',
}

export interface IMovie {
  id: number;
  title: string;
  director: string;
  releasedYear: number;
  rating: Rating;
}

export interface IFakeDatabase {
  watchLaterList: IMovie[];
}


export const database: IFakeDatabase = {
  watchLaterList: [
    {
      id: 1,
      title: 'The Shawshank Redemption',
      director: 'Frank Darabont',
      releasedYear: 1994,
      rating: Rating.GOOD,
    }
  ]
}
