import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./router/user.router.js";
import companyRoute from './router/company.route.js'
import jobRouter from './router/job.route.js'
import applicationRouter from './router/application.router.js'

dotenv.config({});

const app = express();

// Test route
app.get("/home", (req, res) => {
  return res.status(200).json({
    message: "I am coming Server",
    success: true
  });
});

// Middleware
app.use(express.json());  
app.use(express.urlencoded({ extended: true }));  
app.use(cookieParser());

const corsOptions = {
  origin: 'http://localhost:5173',  
  credentials: true
};
app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000;

// Routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRouter);
app.use("/api/v1/application", applicationRouter);

// Start server
app.listen(PORT, () => {
  connectDB();
  console.log(`Server running at port ${PORT}`);
});
