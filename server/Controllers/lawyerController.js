import asyncHandler from 'express-async-handler';
import {Lawyer} from '../Models/lawyerDB.js';
import {User} from '../Models/userDB.js';
import { Appointment } from '../Models/appointmentDB.js';
// const bcrypt = require('bcrypt');

const createLawyer = asyncHandler ( async (req, res) => {
    try{
        const {fullName, email, phone} = req.body;
        const lawyer = await Lawyer.create({
            fullName: fullName,
            email: email,
            phone: phone,
        })
        // const salt = await bcrypt.genSalt(10);
        // const hashedPassword = await bcrypt.hash(req.body.password, salt);
        res.status(200).json(lawyer);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

const getLawyer = asyncHandler (async (req, res) => {
    const fullName = req.query.fullName;
    try {
        const lawyer = await Lawyer.findOne({fullName: fullName});
        const {password, updatedAt, ...other} = lawyer._doc;
        res.status(200).json(other);
    } catch(err) {
        res.status(404).json(err);
    }
})

const updateLawyer = asyncHandler (async (req, res) => {
    if(req.body.userId == req.params.id){
        try {
            const lawyer = await Lawyer.findByIdAndUpdate(req.params.id, { $set: req.body });
            res.status(200).json("Update successfully!");
        } catch(err) {
            res.status(500).json(err);
        }
    }
})

const deleteLawyer = asyncHandler (async (req, res) => {
    if(req.body.userId == req.params.id){
        try {
            const lawyer = await Lawyer.findOneAndDelete(req.params.id);
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
        const {lawyerName, clientName} = apt;
        const client = await User.findOne({fullName: clientName});
        await client.updateOne({$pull: {appointment: req.params.id}});
        const lawyer = await Lawyer.findOne({fullName: lawyerName});
        await lawyer.updateOne({$pull: {appointment: req.params.id}});
        await Appointment.findOneAndDelete({_id: req.params.id});
    } catch(err) {
        return res.status(500).json(err);
    }
})

export {createLawyer, getLawyer, updateLawyer, deleteLawyer, deleteApt};