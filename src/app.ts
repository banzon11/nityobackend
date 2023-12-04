// Import required modules
import express, { Request, Response } from "express";
import { Pool } from "pg";

// Create an Express application
const app = express();
const port = 5000;
import cors from "cors";
app.use(cors());
// PostgreSQL configuration
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "newdatabase",
  password: "admin",
  port: 5434,
});

// Middleware for JSON parsing
app.use(express.json());
// GET operation: Read all data from the database
app.get("/api/data", async (req: Request, res: Response) => {
  try {
    const result = await pool.query("SELECT * FROM duty");
    res.json(result.rows);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).send("Internal Server Error");
  }
});
// GET operation: Read data from the database
app.get("/api/data/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await pool.query("SELECT * FROM duty WHERE id = $1", [id]);
    res.json(result.rows);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).send("Internal Server Error");
  }
});

// POST operation: Create data in the database
app.post("/api/data", async (req: Request, res: Response) => {
  const { name } = req.body;
  try {
    await pool.query("INSERT INTO duty (name) VALUES ($1)", [name]);
    res.send("Data created successfully");
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).send("Internal Server Error");
  }
});

// PUT operation: Update data in the database
app.put("/api/data/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;
  console.log("name", req.body);
  try {
    await pool.query("UPDATE duty SET name = $1 WHERE id = $2", [name, id]);
    res.send("Data updated successfully");
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).send("Internal Server Error");
  }
});

app.delete("/api/data/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await pool.query("DELETE FROM duty WHERE id = $1", [id]);
    res.send("Data deleted successfully");
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).send("Internal Server Error");
  }
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export { app };
