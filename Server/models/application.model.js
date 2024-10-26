import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
    job: {
        type: mongoose.Schema.Types.ObjectId,  // Corrected "Type" to "type"
        ref: "Job",
        required: true  // Corrected "require" to "required"
    },
    applicant: {
        type: mongoose.Schema.Types.ObjectId,  // Corrected "Type" to "type"
        ref: "User",
        required: true  // Corrected "require" to "required"
    },
    status: {
        type: String,  // Corrected "Type" to "type"
        enum: ['pending', 'accepted', 'rejected'],
        default: 'pending'
    }
}, { timestamps: true });

export const Application = mongoose.model("Application", applicationSchema);
