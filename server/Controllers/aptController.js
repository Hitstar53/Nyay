import asyncHandler from 'express-async-handler';
import { User } from '../Models/userDB.js';
import { Lawyer } from '../Models/lawyerDB.js';
import { Appointment } from '../Models/appointmentDB.js';
import mongoose from 'mongoose';

const setApt = asyncHandler(async (req, res) => {
    try {
        const client = await User.findById(req.params.id);
        if (!client) {
            return res.status(404).json({ message: 'User not found' });
        }

        const clientName = client.fullName;
        const clientId = client._id;
        const { description, lawyerName, aptDate, startTime, endTime } = req.body;
        console.log("lawyer name is" + lawyerName);
        const lawyer = await Lawyer.find({fullName: lawyerName});
        // console.log(lawyer);
        // console.log("lawyer name is" + lawyerId);
        const parsedDate = new Date(aptDate);

        const appointment = await Appointment.create({
            clientName: clientName,
            lawyerName: lawyerName,
            client: clientId,
            // lawyer: lawyerId,
            description: description,
            aptDate: parsedDate,
            startTime: startTime,
            endTime: endTime,
        })

        if (!appointment) {
            return res.status(404).json({ message: 'Appointment not found' });
        }

        await User.updateOne({ _id: clientId }, { $push: { appointment: new mongoose.Types.ObjectId(appointment._id) } });
        await Lawyer.updateOne({ fullName: lawyerName }, { $push: { appointment: new mongoose.Types.ObjectId(appointment._id) } });
        res.status(200).json(appointment);

    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
});

const aptAccepted = asyncHandler( async (req, res) => {
    try{
        const apt = await Appointment.findById(req.params.id);

        if(apt.status == "Pending"){
            await apt.updateOne({status: "Accepted"});
            res.status(200).json("Appointment accepted");
        }
        else {
            res.status(400).json("Appointment status cannot be updated.");
        }

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
            const { _id, lawyerName, clientName, description, aptDate, startTime, endTime } = appointment;
            aptList.push({ lawyerName, clientName, description, aptDate, startTime, endTime });
        })

        res.status(200).json(aptList);

    } catch (err) {
        return res.status(500).json(err);
    }
});

export { setApt, getApt, aptAccepted, aptDeclined };