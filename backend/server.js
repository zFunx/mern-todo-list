import express from "express";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

await connectDB();

const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRoutes);
app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
