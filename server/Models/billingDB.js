const mongoose = require('mongoose')
const ratingSchema = mongoose.Schema({
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    lawyer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Lawyer"
    },
    amount: {
        type: Number,
        required: true
    },
    IFSCcode: {
        type: String,
        required: true
    },
    bankName: {
        type: String,
        required: true
    },
    accountNumber: {
        type: String,
        required: true
    },
},
{
    collection: "Billings"
})

module.exports = mongoose.model("Billings", ratingSchema)