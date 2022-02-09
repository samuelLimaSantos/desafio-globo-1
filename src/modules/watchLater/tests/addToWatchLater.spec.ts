import request from "supertest";
import * as faker from 'faker';
import { Rating } from "../../../shared/fakeDatabase";
import { app } from "../../../app";

describe('Add To Watch Later List Tests', () => {
  it('should be able to add a movie to a watch later list', async() => {
    const movie = {
      title: faker.random.words(),
      director: faker.name.firstName(),
      releasedYear: faker.date.past().getFullYear(),
      rating: Rating.EXCELLENT,
    };

    const response = await 
      request(app)
      .post('/watch-later')
      .send(movie);

    expect(response.status).toBe(201);
  });

  it('should not be able to add a movie with an existent title to watch later list', async() => {
    const movie = {
      title: faker.random.words(),
      director: faker.name.firstName(),
      releasedYear: faker.date.past().getFullYear(),
      rating: Rating.EXCELLENT,
    };

    await request(app)
      .post('/watch-later')
      .send(movie);

    const response = await request(app)
      .post('/watch-later')
      .send(movie);

    expect(response.status).toBe(400);
    expect(response.body.message).toBe('Movie already in watch later list');
  })
}) 