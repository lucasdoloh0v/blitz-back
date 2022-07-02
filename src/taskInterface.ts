interface ITask {
  name: string,
  status: string,
}

interface ITaskOnDB extends ITask {
  id: number,
  createdAt: string
}