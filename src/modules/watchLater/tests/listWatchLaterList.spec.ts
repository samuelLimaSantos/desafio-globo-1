import request from "supertest";
import { app } from "../../../app";

describe('List Watch Later List Tests', () => {
  it('should be able to list all movies in watch later list', async() => {
    const response = await 
      request(app)
      .get('/watch-later');

    expect(response.status).toBe(200);
    expect(response.body.length).toBe(1);
    expect(response.body[0]).toHaveProperty('id');
    expect(response.body[0]).toHaveProperty('title');
    expect(response.body[0]).toHaveProperty('director');
    expect(response.body[0]).toHaveProperty('releasedYear');
    expect(response.body[0]).toHaveProperty('rating');
  });
}) 