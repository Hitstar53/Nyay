const mongoose = require('mongoose')
const appointmentSchema = mongoose.Schema({
    client: {
        type: String,
        required: true
    },
    description: { 
        type : String, 
        required:true
    },
    lawyer: {
        type:String,
        required:true
    },
    aptDate:{
        type:Date,
        required:true
    },
},
{
    collection: "Appointments"
})

module.exports = mongoose.model("Appointments", appointmentSchema)