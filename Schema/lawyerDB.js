const mongoose = require("mongoose");

const LawyerSchema = new mongoose.Schema(
  {
    personalInfo: {
      fullName: { 
        type: String, 
        required: true, 
        min: 3, 
        max: 30,
      },
      email: {
        type: String,
        required: true,
        max: 50,
        unique: true,
      },
      phone: {
        type: String,
        required: true,
        max: 10,
        unique: true,
      },
      officePhone: {
        type: String,
        required: true,
        max: 50,
        unique: true,
      },
      bio: {
        type: String,
        max: 500,
      },
      gender: {
        type: String,
      },
      dob: {
        type: Date,
        required: true,
      },
      password: {
        type: String,
        required: true,
        min: 6,
      },
      profilePicture: {
        type: String,
        default: "",
      },
      connections: {
        type: Array,
        default: [],
      },
      city: {
        type: String,
        max: 50,
      },
      state: {
        type: String,
        max: 50,
      },
      officeAdd: {
        type: String,
        max: 50,
      },
    },
    proffesionalInfo: {
      notableCases: {
        type: Array,
        default: [],
      },
      barAssociation: {
        type: String,
        max: 50,
      },
      barNumber: { 
        type: String, 
        max: 50 
      },
      barYear: { 
        type: Number, 
        default: 0
      },
      barState: { 
        type: String, 
        max: 50 
      },
      practiceAreas: { 
        type: Array, 
        default: [] 
      },
      practiceAreas: { 
        type: Array, 
        default: [] 
      },
      experience: { 
        type: Number, 
        default: 0 
      },
      education: {
        year: { type: Number, required: true },
        institute: { type: String, required: true },
        result: { type: String, required: true },
        degree: { type: String, required: true, default: null }
      },
      specializations: {
        type: Array,
        default: [],
      },
      publications: {
        type: Array,
        default: [],
      },
      awards: {
        type: Array,
        default: [],
      },
    },
    languages: {
      type: Array,
      default: [],
    },
    rating: {
      type: Number,
      default: 0,
    },
    reviews: {
      type: Array,
      default: [],
    },
    fees: {
      type: Number,
      default: 0,
    },
    availability: {
      type: Array,
      default: [],
    },
    socialMedia: {
      type: Array,
      default: [],
    },
    accountType: {
      type: String,
      default: "lawyer",
    },
    appointment: {
        date: {
            type: Date,
            required: true,
        },
        reqStatus: {
            type: String
        },
        notes: {
            type: String,
            max: 50
        },
        duration: {
            type: Number,
            default: 0,
        },
        client: {
            type: mongoose.Schema.Types.ObjectId,
        }
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Lawyer", LawyerSchema);
