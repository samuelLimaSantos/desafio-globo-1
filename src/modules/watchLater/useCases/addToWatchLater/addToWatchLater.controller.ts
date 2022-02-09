import { Movie } from './../../entity/movie.entity';
import { Request, Response } from 'express';
import { AddToWatchLaterService } from './addToWatchLater.service';

export class AddToWatchLaterController {
  addToWatchLaterList(request: Request, response: Response) {
    const movie = request.body as Movie;
    try {
      const createdMovie = AddToWatchLaterService.execute(movie);
  
      return response.status(201).json(createdMovie);
    } catch (error: any) {
      if (error.message === 'Movie already in watch later list') 
        return response.status(400).json({ message: 'Movie already in watch later list' });

      return response.status(500).json({ message: error.message });
    }
  }
}