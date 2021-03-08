import Express from 'express';
import getTestRoutes from '../test';

export default function getRoutes()
{
  const router = Express.Router();

  router.use('/test', getTestRoutes());

  return router;
}