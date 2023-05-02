import 'dotenv/config';
import express from 'express'
import cors from 'cors'

import routes from './routes';

class App {
  server;

  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
  }

  routes() {
    this.server.use(routes);
  }

  listen() {
    this.server.listen(
      process.env.PORT || 3000,
      () => 'server running on port 3000'
    );
  }
}

new App().listen()
