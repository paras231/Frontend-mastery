import express from "express";
import http from "http";
import { Server } from "socket.io";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import projectRoute from "./routes/project.js";
dotenv.config();

const app = express();
const PORT = 5000 || process.env.PORT;
const server = http.createServer(app);
// connect to mongodb

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use("/api/project", projectRoute);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  socket.on("setup", (res) => {
    console.log("socket connected");
  });
  socket.on("disconnect", () => {
    console.log("user left");
  });
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`server started on port ${PORT}`);
});
