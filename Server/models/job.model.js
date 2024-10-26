import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title: {
        type: String,  // Corrected "Types" to "type"
        required: true  // Corrected "require" to "required"
    },
    description: {
        type: String,  // Corrected "Types" to "type"
        required: true  // Corrected "require" to "required"
    },
    requirements: [{
        type: String,  // Corrected "Types" to "type"
    }],
    salary: {
        type: String,  // Corrected "Types" to "type"
        required: true  // Corrected "require" to "required"
    },
    experienceLevel: {
        type: Number,  // Corrected "Types" to "type"
        required: true  // Corrected "require" to "required"
    },
    location: {
        type: String,  // Corrected "Types" to "type"
        required: true  // Corrected "require" to "required"
    },
    jobType: {
        type: String,  // Corrected "Types" to "type"
        required: true  // Corrected "require" to "required"
    },
    position: {
        type: String,  // Corrected "Types" to "type"
        required: true  // Corrected "require" to "required"
    },
    company: {
        type: mongoose.Schema.Types.ObjectId,  // Corrected "Types" to "type"
        ref: 'Company',
        required: true  // Corrected "require" to "required"
    },
    created_by: {
        type: mongoose.Schema.Types.ObjectId,  // Corrected "Types" to "type"
        ref: 'User',
        required: true  // Corrected "require" to "required"
    },
    applications: [{
        type: mongoose.Schema.Types.ObjectId,  // Corrected "Types" to "type"
        ref: 'Applications', 
    }]
}, { timestamps: true });

export const Job = mongoose.model("Job", jobSchema);
