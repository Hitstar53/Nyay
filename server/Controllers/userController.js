import asyncHandler from 'express-async-handler';
import {User} from '../Models/userDB.js';

const createUser = asyncHandler ( async (req, res) => {
    try{
        const {fullName, email, phone} = req.body;
        const client = await User.create({
            fullName,
            email,
            phone
        })
        res.status(200).json(client);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

export default createUser;