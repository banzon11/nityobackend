// app.test.ts
import request from "supertest";
import { app } from "./app";

describe("API Tests", () => {
  test("GET /api/data should return all data", async () => {
    const response = await request(app).get("/api/data");
    expect(response.status).toBe(200);
    // Add more assertions based on your expected response
  });

  test("GET /api/data/:id should return data for a specific ID", async () => {
    const response = await request(app).get("/api/data/1"); // Assuming ID 1 exists in your database
    expect(response.status).toBe(200);
    // Add more assertions based on your expected response
  });

  test("POST /api/data should create new data", async () => {
    const response = await request(app)
      .post("/api/data")
      .send({ name: "New Data" });
    expect(response.status).toBe(200);
    // Add more assertions based on your expected response
  });

  test("PUT /api/data/:id should update data for a specific ID", async () => {
    const response = await request(app)
      .put("/api/data/1") // Assuming ID 1 exists in your database
      .send({ name: "Updated Data" });
    expect(response.status).toBe(200);
    // Add more assertions based on your expected response
  });
});
