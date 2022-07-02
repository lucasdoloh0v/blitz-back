import { Request, Response } from "express"
import { getAllTasks } from "../services/taskService"

export const listTasks = async (_req: Request, res: Response): Promise<Response> => {
  try {
    const tasks = await getAllTasks();
    return res.status(200).json(tasks);
  } catch ({ message }) {
    return res.status(200).json({ message });
  }
}