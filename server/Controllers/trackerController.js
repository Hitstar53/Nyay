import asyncHandler from 'express-async-handler';
import { User } from '../Models/userDB.js';
import { Lawyer } from '../Models/lawyerDB.js';
import { Tracker } from '../Models/trackerDB.js';
import mongoose from 'mongoose';

const postUpdate = asyncHandler(async (req, res) => {
    try {
        console.log(req.params.id);
        const lawyer = await Lawyer.findById(req.params.id);
        console.log(lawyer);
        if (!lawyer) {
            return res.status(404).json({ message: 'Lawyer not found' });
        }
        const lawyerName = lawyer.fullName;
        const lawyerEmail = lawyer.email;
        const lawyerPhone = lawyer.phone;
        const { update, details, clientName, updateDate } = req.body;
        const parsedDate = new Date(updateDate);

        // console.log(clientName, Email, clientPhone, description, lawyerName);
        const newUpdate = await Tracker.create({
            lawyerName: lawyerName,
            lawyerEmail: lawyerEmail,
            lawyerPhone: lawyerPhone,
            update: update,
            details: details,
            clientName: clientName,
            updateDate: parsedDate,
        })
        console.log(newUpdate);
        if (!newUpdate) {
            return res.status(404).json({ message: 'Update not found' });
        }

        await Lawyer.updateOne({ _id: req.params.id }, { $push: { updates: new mongoose.Types.ObjectId(newUpdate._id) } })
        await User.updateOne({ fullName: clientName }, { $push: { updates: new mongoose.Types.ObjectId(newUpdate._id) } })
        res.status(201).json(newUpdate);
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
});

const getUpdate = asyncHandler(async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        console.log(req.params.id);
        const updateItems = await Promise.all(
            user.updates.map(updateId => {
                return Tracker.findById(updateId);
            }
        ))
        console.log(updateItems);
        let updateList = [];
        try{
            updateItems.map((updateItem) => {
                const { _id, lawyerName, clientName, details, update, updateDate } = updateItem;
                updateList.push({ _id, lawyerName, clientName, details, update, updateDate });
            })
        } catch(err){
            console.log(err);
        }
        console.log("items added to update list.");
        res.status(200).json(updateList);
    } catch (err) {
        return res.status(500).json(err);
    }
});

const updateUpdate = asyncHandler (async (req, res) => {
    try{
        const update = await Tracker.findByIdAndUpdate(req.params.id, { $set: req.body });
        // console.log("hello");
        res.status(200).json("Update successful!");
    } catch(err) {
        return res.status(500).json(err);
    }
})

const deleteUpdate = asyncHandler (async (req, res) => {
    try{
        const update = await Tracker.findById(req.params.id);
        const {lawyerName, clientName} = update;
        const client = await User.findOne({fullName: clientName});
        await client.updateOne({$pull: {updates: req.params.id}});
        const lawyer = await Lawyer.findOne({fullName: lawyerName});
        await lawyer.updateOne({$pull: {updates: req.params.id}});
        await Tracker.findOneAndDelete({_id: req.params.id});
        res.status(200).json("Update deleted!");
    } catch(err) {
        return res.status(500).json(err);
    }
})

export { postUpdate, getUpdate, updateUpdate, deleteUpdate };