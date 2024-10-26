import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
    name: {
        type: String,     // Correct: use 'type' instead of 'Types'
        required: true    // Correct: 'required' instead of 'require'
    },
    description: {
        type: String      // Correct: use 'type' instead of 'Types'
    },
    location: {
        type: String      // Correct: use 'type' instead of 'Types'
    },
    logo: {
        type: String      // Correct: use 'type' instead of 'Types'
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,  // Correct: use 'type'
        ref: 'User',                           // Refers to 'User' model
        required: true                         // Correct: 'required' instead of 'require'
    }
}, { timestamps: true });

export const Company = mongoose.model("Company", companySchema);
