import { ErrorRequestHandler, NextFunction } from "express";
import logger from "loglevel";

const errorHandler: ErrorRequestHandler = (error: any, _req: any, res: any, next: NextFunction) =>
{
  if (res.headerSent) 
  {
    next(error);
  } else {
    logger.error(error);
    res.status(500);
    res.json({
      message: error.message
    });
  }
};

export default errorHandler;