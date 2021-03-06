import { Request, Response } from "express"
import { remove, update } from "../models/tasksModel";
import { createTask, getAllTasks } from "../services/taskService"

export const listTasks = async (_req: Request, res: Response): Promise<Response> => {
  try {
    const tasks = await getAllTasks();
    return res.status(200).json(tasks);
  } catch ({ message }) {
    return res.status(200).json({ message });
  }
}

export const postTask = async (req: Request, res: Response): Promise<Response> => {
  const { body } = req;
  try {
    const result = await createTask(body);
    return res.status(201).json(result);
  } catch ({ message }) {
    return res.status(500).json({ message });
  }
}

export const updateTask = async (req: Request, res: Response): Promise<Response> => {
  const id = Number(req.params.id);
  const { body } = req;
  try {
    await update(id, body);
    return res.status(201).json({ message: 'updated!'});
  } catch ({ message }) {
    return res.status(500).json({ message });
  }
}

export const removeTask = async (req: Request, res: Response): Promise<Response> => {
  const id = Number(req.params.id);
  try {
    await remove(id);
    return res.status(200).json({ message: 'Task deleted successfully'});
  } catch ({ message }) {
    return res.status(500).json({ message });
  }
}