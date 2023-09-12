import asyncHandler from 'express-async-handler';
import {User} from '../Models/userDB.js';
import {Lawyer} from '../Models/lawyerDB.js';
import {Appointment} from '../Models/appointmentDB.js';
import mongoose from 'mongoose';

const setApt = asyncHandler(async (req, res) => {
    try {
        console.log(req.params.id);
        const client = await User.findById(req.params.id);
        console.log(client);
        if (!client) {
            return res.status(404).json({ message: 'User not found' });
        }
        const clientName = client.fullName;
        const clientEmail = client.email;
        const clientPhone = client.phone;
        const description = req.body.description;
        const lawyerName = req.body.lawyerName;
        // const aptDate = new Date(req.body.aptDate);

        console.log(clientName, clientEmail, clientPhone, description, lawyerName);
        const appointment = await Appointment.create({
            clientName,
            clientEmail,
            clientPhone,
            description,
            lawyerName,
            // aptDate
        })
        console.log(appointment);
        if (!appointment) {
            return res.status(404).json({ message: 'Apt not found' });
        }

        await User.updateOne({_id:req.params.id}, {$push: {appointment:new mongoose.Types.ObjectId(appointment._id)}})
        await Lawyer.updateOne({fullName: lawyerName}, {$push: {appointment:new mongoose.Types.ObjectId(appointment._id)}})
        res.status(201).json(appointment);
    } catch(err) {
        console.log(err);
        return res.status(500).json(err);
    }
});

// const getApt = asyncHandler(async (req, res) => {
//     try {
//         const appointments = await Appointment.find({});
//         res.status(200).json(appointments);
//     } catch(err) {
//         return res.status(500).json(err);
//     }
// });

export default setApt;