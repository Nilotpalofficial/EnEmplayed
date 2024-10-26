import { application } from "express";
import { Application } from "../models/application.model.js";
import { Job } from "../models/job.model.js";
import { populate } from "dotenv";

export const applayJob = async (req,res) =>{
    try {
        const userId  =req.id;
        const jobId = req.params.id;
        if(!jobId){
            return res.status(400).json({
                message:"Job id is required",
                success:false
            })
        };

        const existingApplication = await Application.findOne({job:jobId,applicant:userId});
        if(existingApplication){
            return res.status(404).json({
                message:"You have already applyed for thisjob",
                success:false
            });
        }
        const job = await Job.findById(jobId);
        if(!job){
            return res.status(400).json({
                message:"JOb no found",
                success:false

            })
        }

        const newApplication = await Application.create({
            job:jobId,
            applicant:userId,
        });
        job.applications.push(newApplication._id);
        await job.save();
        return res.status(201).json({
            message:"Job applied successfully",
            success:true
        })
    } catch (error) {
        console.log(error)
    }
};
export const getAppliedJobs = async (req,res)=>{
    try {
        const userId =req.id;
        const application = await Application.find({applicant:userId}).sort({createdAt:-1}).populate({
            path:"job",
            options:{sort:{createdAt:-1}},
            populate:{
                path:"company",
                options:{sort:{createdAt:-1}},
            }
        });
        return res.status(200).json({
            application,
            success:true
        })
    
    } catch (error) {
        console.log(error)
    }
};

export const getApplications = async (req,res) =>{
    try {
        const jobId =req.id;
        const job = await Job.findById(jobId).populate({
            path:"applications",
            options:{sort:{createdAt:-1}},
            populate:{
                path:"applicant"
            }
        });
        if(!job){
            return res.status(400).json({
                message:"job not Found",
                success:false
            })
        };
        return res.status(200).json({
            job,
            success:true
        })
    } catch (error) {
        console.log(error)
    }
};
export const updateStatus = async(req,res)=>{
    try {
        const {status} =req.body;
        const applicationId = req.param.id;
        if(!status){
            return res.status(404).json({
                message:"Status is required",
                success:false
            })
        };
        const application = await Application.findOne({_id:applicationId});
        if(!application){
            return res.status(404).json({
                message:"Application not Found",
                success:false
            })
        };

        //update status

        application.status = status.toLowerCase();
        await application.save();
        return res.status(200).json({
            message:"Status updated succrssfully...",
            success:true
        })
    } catch (error) {
        console.log(error)
    }
}