export interface ITask {
  name: string,
  status: string,
}

export interface ITaskOnDB extends ITask {
  id: number,
  createdAt: string
}