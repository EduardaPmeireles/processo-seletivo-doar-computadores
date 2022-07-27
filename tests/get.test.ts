import request from 'supertest'
import app from "../src/server";


describe("Test the root path", () => {
  test("Should return an object equal to {alive: true}", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({alive: true})
  });
});


