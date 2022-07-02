import bodyparser from 'body-parser';
import { Express } from 'express';
import tasks from './taskRoutes'

export default (app: Express) => {
  app.use(bodyparser.json());
  app.use(tasks);
};