import { ResultSetHeader } from "mysql2";
import { ITask, ITaskOnDB } from "../taskInterface";
import connection from "./connection"

export const getAll = async (): Promise<ITaskOnDB[]> => {
  const [result] = await connection.execute(
    'SELECT * FROM Ebyrt.Tasks ORDER BY name'
  )
  return result as ITaskOnDB[];
}

export const create = async (task: ITask, date: string): Promise<number> => {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(`INSERT INTO Ebyrt.Tasks (name, status, created_at)
    VALUES (?, ?, ?)`, [task.name, task.status, date]);

  return insertId;
}

export const removeTask = async (id: number) => {
  
}

export const updateTask = async (id: number, taks: ITask) => {
  
}