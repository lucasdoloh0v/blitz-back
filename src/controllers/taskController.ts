import { Request, Response } from "express"
import { createTask, getAllTasks } from "../services/taskService"

export const listTasks = async (_req: Request, res: Response): Promise<Response> => {
  try {
    const tasks = await getAllTasks();
    return res.status(200).json(tasks);
  } catch ({ message }) {
    return res.status(200).json({ message });
  }
}

export const postTask = async (req: Request, res: Response) => {
  const { body } = req;
  try {
    const result = await createTask(body);
    return res.status(201).json(result);
  } catch ({ message }) {
    return res.status(500).json({ message });
  }
}