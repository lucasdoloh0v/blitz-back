import { getAll } from "../models/tasksModel"
import { ITaskOnDB } from "../taskInterface";

export const getAllTasks = async (): Promise<ITaskOnDB[]> => {
  const result = await getAll();
  return result
}