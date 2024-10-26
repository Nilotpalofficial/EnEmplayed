import express from "express";
 import isAuthenticated from "../middleware/isAuthenticated.js";
import { applayJob, getApplications, getAppliedJobs, updateStatus } from "../controllers/application.controllers.js";

 const router =express.Router();

 router.route("/apply/:id").get(isAuthenticated,applayJob);
 router.route("/get").get(isAuthenticated,getAppliedJobs);
 router.route("/:id/applications").get(isAuthenticated,getApplications);
 router.route("/status/:id/update").post(isAuthenticated,updateStatus);

 
 export default router;