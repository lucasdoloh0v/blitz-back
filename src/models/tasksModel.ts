import { ITask, ITaskOnDB } from "../taskInterface";
import connection from "./connection"

export const getAll = async (): Promise<ITaskOnDB[]> => {
  const [result] = await connection.execute(
    'SELECT * FROM Ebyrt.Tasks ORDER BY name'
  )
  return result as ITaskOnDB[];
}

export const createTask = async (task: ITask) => {
  
}

export const removeTask = async (id: number) => {
  
}

export const updateTask = async (id: number, taks: ITask) => {
  
}