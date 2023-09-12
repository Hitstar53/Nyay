import mongoose from 'mongoose';
import dotenv from 'dotenv';

const connectDB = async() => {
    mongoose.connect(process.env.MONGO_CONNECTION,{
        useNewUrlParser : true,
    }).then(console.log("Connected To MongoDB"))
    .catch(err => {console.error(err)})
}

export default connectDB;
