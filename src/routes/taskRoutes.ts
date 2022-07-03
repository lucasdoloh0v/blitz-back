import { Router } from "express";
import { listTasks, postTask, removeTask } from "../controllers/taskController";

const router = Router();

router
  .get('/tasks', listTasks)
  .post('/tasks', postTask)
  .delete('/tasks/:id', removeTask)

export default router;