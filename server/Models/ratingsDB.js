const mongoose = require('mongoose')
const ratingSchema = mongoose.Schema({
    client: {
        type: String,
        required: true
    },
    rating: { 
        type : Number, 
        required: true
    },
    lawyer: {
        type: String,
        required: true
    },
    ratingDate:{
        type: Date,
        required: true
    },
},
{
    collection: "Ratings"
})

module.exports = mongoose.model("Ratings", ratingSchema)