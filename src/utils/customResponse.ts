import { Request, Response, NextFunction } from 'express';

enum STATUS {
  success = 200,
  error = 500,
  badRequest = 400,
  unauthorized = 401,
}

export default function responseMiddleware(
  request: Request,
  response: Response,
  next: NextFunction
) {
  response.success = (message: string, data?: any) => {
    const body = {
      message,
      data,
    };
    return buildResponse(response, STATUS.success, body);
  };

  response.error = (message: string, data?: any, error?: Error) => {
    const body = {
      message,
      data,
      error: error?.message,
    };
    return buildResponse(response, STATUS.error, body);
  };

  response.badRequest = (message: string, data?: any, error?: Error) => {
    const body = {
      message,
      data,
      error: error?.message,
    };
    return buildResponse(response, STATUS.badRequest, body);
  };

  response.unauthorized = (message: string, data?: any) => {
    const body = {
      message,
      data,
    };
    return buildResponse(response, STATUS.unauthorized, body);
  };

  next();
}

function buildResponse(response: Response, status: STATUS, body: any) {
  log(status, body);
  return response.status(status).send(body);
}

function log(status: STATUS, body: any) {
  const statusName = STATUS[status];

  const logMessage = `[Response] - ${statusName}: ${JSON.stringify(body)}`;

  if (status === STATUS.success) {
    console.log(logMessage);
  } else {
    console.error(logMessage);
  }
}
