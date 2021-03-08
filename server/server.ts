import next from 'next';
import logger from 'loglevel';
import { startServer } from './start';

const port: number = parseInt(process.env.PORT!) || 3000;
const dev: boolean = process.env.NODE_ENV !== 'production';

const app = next({ dev });
const handle = app.getRequestHandler();

export type NextHandlerType = typeof handle;

app.prepare().then(() => {
    logger.setLevel('INFO');

    startServer(handle, port);
  })
  .catch(e => console.log(e));