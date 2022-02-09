export enum Rating {
  BAD = 'BAD',
  GOOD = 'GOOD',
  EXCELLENT = 'EXCELLENT',
}

export interface IMovie {
  id: string;
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
      id: 'bfe13127-4d56-4fbb-8626-96903017410c',
      title: 'The Shawshank Redemption',
      director: 'Frank Darabont',
      releasedYear: 1994,
      rating: Rating.GOOD,
    }
  ]
}
