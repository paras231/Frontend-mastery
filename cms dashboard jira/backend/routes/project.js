import express from "express";
import { addNewProject } from "../controllers/project.js";

const router = express.Router();

router.route("/new/project").post(addNewProject);

export default router;
