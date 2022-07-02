import { Router } from "express";
import { listTasks } from "../controllers/taskController";

const router = Router();

router
  .get('/tasks', listTasks)

export default router;