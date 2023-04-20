import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import blogRoute from "./route.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => {
    console.log("no connection");
  });

const app = express();
const PORT = 5000 || process.env.PORT;

app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api", blogRoute);

app.listen(process.env.PORT || PORT, () => {
  console.log(`server started on port ${PORT}`);
});
