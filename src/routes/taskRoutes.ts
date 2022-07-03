import { Router } from "express";
import { listTasks, postTask } from "../controllers/taskController";

const router = Router();

router
  .get('/tasks', listTasks)
  .post('/tasks', postTask)

export default router;