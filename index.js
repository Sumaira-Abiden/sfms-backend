import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import feedbackRoutes from './routes/feedbackRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import getFeedbackRoutes from './routes/getFeedbackRoutes.js';

import "dotenv/config"

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/feedback', feedbackRoutes);
app.use('/admin', adminRoutes);
app.use('/getFeedback', getFeedbackRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => app.listen(4000, () => console.log('Server running')))
  .catch(err => console.error('MongoDB error:', err));
