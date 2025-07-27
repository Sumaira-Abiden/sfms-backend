import express from 'express';
import Feedback from '../models/Feedback.js';
import { verifyToken } from '../middleware/authMiddleware.js';

const router = express.Router();

// Submit feedback
router.post('/', async (req, res) => {
  try {
    console.log(req.body, "<<< req req")
    const feedback = new Feedback(req.body);
    const saved = await feedback.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: 'Feedback not saved' });
  }
});

// Get all feedbacks (admin only)
router.get('/', verifyToken, async (req, res) => {
  const feedbacks = await Feedback.find().sort({ createdAt: -1 });
  res.json(feedbacks);
});

export default router;
