import express from 'express';
import routes from './routes';

const app = express();
routes(app);
app.use(express.json());

const PORT = 3000;

const server = app.listen(PORT, () => console.log(
  `Server is running on PORT: ${PORT}`,
));

export default server;