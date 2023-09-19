import asyncHandler from 'express-async-handler';
import { User } from '../Models/userDB.js';
import { Lawyer } from '../Models/lawyerDB.js';
import { Appointment } from '../Models/appointmentDB.js';
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
        const { description, lawyerName, aptDate, startTime, endTime } = req.body;
        const parsedDate = new Date(aptDate);

        console.log(clientName, clientEmail, clientPhone, description, lawyerName);
        const appointment = await Appointment.create({
            clientName: clientName,
            clientEmail: clientEmail,
            clientPhone: clientPhone,
            description: description,
            lawyerName: lawyerName,
            aptDate: parsedDate,
            startTime: startTime,
            endTime: endTime,
        })
        console.log(appointment);
        if (!appointment) {
            return res.status(404).json({ message: 'Apt not found' });
        }

        await User.updateOne({ _id: req.params.id }, { $push: { appointment: new mongoose.Types.ObjectId(appointment._id) } })
        await Lawyer.updateOne({ fullName: lawyerName }, { $push: { appointment: new mongoose.Types.ObjectId(appointment._id) } })
        res.status(201).json(appointment);
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
});

const aptAccepted = asyncHandler( async (req, res) => {
    try{
        const apt = await Appointment.findById(req.params.id);
        console.log(apt);
        if(apt.status == "Pending"){
            await apt.updateOne({status: "Accepted"});
        }
        else {
            res.status(400).json("Appointment status cannot be updated.");
        }
        res.status(200).json("Appointment accepted");
    }catch(err){
        return res.status(500).json(err);
    }
})

const aptDeclined = asyncHandler( async (req, res) => {
    try{
        const apt = await Appointment.findById(req.params.id);
        const {clientName, lawyerName} = apt;
        const client = await User.findOne({fullName: clientName});
        await client.updateOne({$pull: {appointment: req.params.id}});
        const lawyer = await Lawyer.findOne({fullName: lawyerName});
        await lawyer.updateOne({$pull: {appointment: req.params.id}});
        if(apt.status == "Pending"){
            await Appointment.finOneAndDelete({_id: req.params.id});
        }
        res.status(200).json("Appointment has been declined.");
    }catch(err){
        return res.status(500).json(err);
    }
})

const getApt = asyncHandler(async (req, res) => {
    try {
        const lawyer = await Lawyer.findById(req.params.id);
        const appointments = await Promise.all(
            lawyer.appointment.map(aptId => {
                return Appointment.findById(aptId);
            }
        ))
        let aptList = [];
        appointments.map((appointment) => {
            const { _id, lawyerName, clientName, description } = appointment;
            aptList.push({ _id, lawyerName, clientName, description });
        })
        res.status(200).json(aptList);
    } catch (err) {
        return res.status(500).json(err);
    }
});

export { setApt, getApt, aptAccepted, aptDeclined };