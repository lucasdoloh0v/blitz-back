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

export const remove = async (id: number) => {
  await connection.execute('DELETE FROM Ebyrt.Tasks WHERE id=?', [id]);
}

export const update = async (id: number, taks: ITask) => {
  await connection.execute('UPDATE Ebyrt.Tasks SET name=?, status=? WHERE id=?', [taks.name, taks.status, id]);
}