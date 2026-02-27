import express from "express";
import env from "dotenv";
import connectDb from "./configs/db.js";
import router from "./routes/students.route.js";

env.config();

connectDb();

const app = express();

app.use(express.json());

app.use("/students", router);

export default app;
