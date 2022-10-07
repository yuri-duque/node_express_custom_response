import { Router, Request, Response } from 'express';

const path = '/user';
const router = Router();

router.post(path, (request: Request, response: Response): void => {
  const { body } = request;

  response.success('success', body);
});

router.put(path, (request: Request, response: Response): void => {
  const { body } = request;

  response.error('my custom error message', body, new Error('my error'));
});

router.delete(path, (request: Request, response: Response): void => {
  const { body } = request;

  response.badRequest('my custom error message', body, new Error('my error'));
});

router.get(path, (request: Request, response: Response): void => {
  const { body } = request;

  response.unauthorized('unauthorized', body);
});

export default router;
