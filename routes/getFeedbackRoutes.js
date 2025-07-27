import express from "express";
import Feedback from "../models/Feedback.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const Allfeedback = await Feedback.find({});
    res.status(201).json(Allfeedback);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
