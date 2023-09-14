import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './Config/dbSetup.js';
import userRoute from './Routes/userRoutes.js';
import lawyerRoute from './Routes/lawyerRoutes.js';

const app = express()
dotenv.config()
app.use(cors())
const PORT = process.env.PORT || 5000
connectDB()

app.use( express.urlencoded({extended : true }));
app.listen(PORT,() => {console.log(`Server Started On http://localhost:${PORT}`)})
app.use(express.json({limit:'5mb'}))

app.use('/client/', userRoute);
app.use('/lawyer/', lawyerRoute);