import Express from 'express';
import { Server } from 'http';
import logger from 'loglevel';
import { promisify } from 'util';
import { NextHandlerType } from "./server";
import errorHandler from './middleware/error';
import getRoutes from './routes';
import { setupCloseOnExit } from './utils';

function startServer(handle: NextHandlerType, port: number) 
{
  const app: Express.Application = Express();

  app.disable('x-powered-by');
  app.use(errorHandler);

  app.use('/api', getRoutes());

  app.all('*', (req: Express.Request, res: Express.Response) => 
  {
    return handle(req, res);
  });

  return new Promise(resolve => {
    const server: Server = app.listen(port, () => {
    logger.info(`>> Listening at ${ port }`);
    
    const originalClose = server.close.bind(server);

    /* @ts-ignore */
    server.close = promisify(originalClose);

    setupCloseOnExit(server);

    resolve(server);
    })
  })
}

export { startServer };