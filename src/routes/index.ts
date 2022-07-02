import bodyparser from 'body-parser';
import { Express } from 'express';

export default (app: Express) => {
  app.use(bodyparser.json());
};