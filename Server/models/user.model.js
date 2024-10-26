import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    phoneNumber:{
        type: Number,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    role:{
        type: String,
        enum: ['student', 'recruiter'],
    },
    profile:{
        bio: { type: String },
        skills: [{ type: String }],  // Spelling corrected from 'skils' to 'skills'
        resume: { type: String },  // URL to resume file
        resumeOriginalName: { type: String },
        company: { 
            type: mongoose.Schema.Types.ObjectId,  // Corrected ObjectId type
            ref: 'company'  // Corrected the typo in 'ref'
        },
        profilePhoto:{
            type: String,
            default: ""
        }
    },
},{timestamps: true});

export const User = mongoose.model('user', userSchema);
