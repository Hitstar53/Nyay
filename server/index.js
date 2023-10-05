import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./Config/dbSetup.js";
import userRoute from "./Routes/userRoutes.js";
import lawyerRoute from "./Routes/lawyerRoutes.js";
import { Server } from "socket.io";

const io = new Server(8000, {
  cors: true,
});

const emailToSocketIdMap = new Map();
const socketidToEmailMap = new Map();

const app = express();
dotenv.config();
app.use(cors());
const PORT = process.env.PORT || 5000;
connectDB();

app.use(express.urlencoded({ extended: true }));
app.listen(PORT, () => {
  console.log(`Server Started On http://localhost:${PORT}`);
});
app.use(express.json({ limit: "5mb" }));

app.use("/client/", userRoute);
app.use("/lawyer/", lawyerRoute);

io.on("connection", (socket) => {
  console.log(`Socket Connected`, socket.id);
  socket.on("room:join", (data) => {
    const { email, room } = data;
    emailToSocketIdMap.set(email, socket.id);
    socketidToEmailMap.set(socket.id, email);
    io.to(room).emit("user:joined", { email, id: socket.id });
    socket.join(room);
    io.to(socket.id).emit("room:join", data);
  });

  socket.on("user:call", ({ to, offer }) => {
    io.to(to).emit("incomming:call", { from: socket.id, offer });
  });

  socket.on("call:accepted", ({ to, ans }) => {
    io.to(to).emit("call:accepted", { from: socket.id, ans });
  });

  socket.on("peer:nego:needed", ({ to, offer }) => {
    console.log("peer:nego:needed", offer);
    io.to(to).emit("peer:nego:needed", { from: socket.id, offer });
  });

  socket.on("peer:nego:done", ({ to, ans }) => {
    console.log("peer:nego:done", ans);
    io.to(to).emit("peer:nego:final", { from: socket.id, ans });
  });
});
