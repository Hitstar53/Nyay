const mongoose = require('mongoose')
const reviewSchema = mongoose.Schema({
    client: {
        type: String,
        required: true
    },
    review: { 
        type : String, 
        min:2,
        max: 500,
        required:true
    },
    lawyer: {
        type:String,
        required:true
    },
    reviewDate:{
        type:Date,
        required:true
    },
},
{
    collection: "Reviews"
})

module.exports = mongoose.model("Reviews", reviewSchema)