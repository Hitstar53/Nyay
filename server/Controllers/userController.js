import asyncHandler from 'express-async-handler';
import {User} from '../Models/userDB.js';
import {Lawyer} from '../Models/lawyerDB.js';
import { Appointment } from '../Models/appointmentDB.js';
// const bcrypt = require('bcrypt');

const createUser = asyncHandler ( async (req, res) => {
    try{
        const {fullName, email, phone, dob} = req.body;
        const parsedDob = new Date(dob);
        // const salt = await bcrypt.genSalt(10);
        // const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const user = await User.create({
            fullName: fullName,
            email: email,
            phone: phone,
            dob: parsedDob
        })
        res.status(200).json(user);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

const getUser = asyncHandler (async (req, res) => {
    const fullName = req.query.fullName;
    try {
        const user = await User.findOne({fullName: fullName});
        const {password, updatedAt, ...other} = user._doc;
        res.status(200).json(other);
    } catch(err) {
        res.status(404).json(err);
    }
})

const updateUser = asyncHandler (async (req, res) => {
    if(req.body.userId == req.params.id){
        try {
            const user = await User.findByIdAndUpdate(req.params.id, { $set: req.body });
            res.status(200).json("Update successfully!");
        } catch(err) {
            res.status(500).json(err);
        }
    }
})

const deleteUser = asyncHandler (async (req, res) => {
    if(req.body.userId == req.params.id){
        try {
            const user = await User.findOneAndDelete(req.params.id);
            res.status(200).json("Account has been deleted.");
        } catch(err) {
            res.status(500).json(err);
        }
    }
    else{
        return res.status(403).json("You can delete only your account.");
    }
})

const deleteApt = asyncHandler( async (req, res) => {
    try{
        const apt = await Appointment.findById(req.params.id);
        const {clientName, lawyerName} = apt;
        const client = await User.findOne({fullName: clientName});
        await client.updateOne({$pull: {appointment: req.params.id}});
        const lawyer = await Lawyer.findOne({fullName: lawyerName});
        await lawyer.updateOne({$pull: {appointment: req.params.id}});
        await Appointment.findOneAndDelete({_id: req.params.id});
        res.status(200).json("Appointment has been deleted.");
    } catch(err) {
        return res.status(500).json(err);
    }
})

export {createUser, getUser, updateUser, deleteUser, deleteApt};