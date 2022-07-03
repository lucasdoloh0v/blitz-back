import moment from "moment";
import { create, getAll } from "../models/tasksModel"
import { ITask, ITaskOnDB } from "../taskInterface";

export const getAllTasks = async (): Promise<ITaskOnDB[]> => {
  const result = await getAll();
  return result
}

const formatNumbers = (number: number): string => {
  return number > 10 ? number.toString() : `0${number}`;
}

export const createTask = async (task: ITask): Promise<ITaskOnDB> => {
  const date = moment().format('YYYY-MM-DD HH:mm:ss');
  //https://stackoverflow.com/questions/5129624/convert-js-date-time-to-mysql-datetime

  const id = await create(task, date);

  return {
    id,
    ...task,
    createdAt: date
  }
}