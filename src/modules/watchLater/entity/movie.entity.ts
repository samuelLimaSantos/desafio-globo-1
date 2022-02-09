import { Rating } from "../../../shared/fakeDatabase";

export class Movie {
  id: string;

  title: string;

  director: string;

  releasedYear: number;
  
  rating: Rating;
}