import express from "express";
import { contect } from "../Controller/ContectController.js";

const router = express.Router();

router.post("/contect", contect);

export default router;
