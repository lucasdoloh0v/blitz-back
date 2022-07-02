import { getAll } from "../models/tasksModel"

export const getAllTasks = async (): Promise<ITaskOnDB[]> => {
  const result = await getAll();
  return result
}