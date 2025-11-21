import express from "express";
import { getUserProfiles } from "../controllers/userController.js";

const router = express.Router();

// GET /users/profiles
router.get("/profiles", getUserProfiles);

export default router;
