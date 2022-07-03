import { Router } from "express";
import { listTasks, postTask, removeTask, updateTask } from "../controllers/taskController";

const router = Router();

router
  .get('/tasks', listTasks)
  .post('/tasks', postTask)
  .put('/tasks/:id', updateTask)
  .delete('/tasks/:id', removeTask)

export default router;