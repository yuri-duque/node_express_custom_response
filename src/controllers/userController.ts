import { Router, Request, Response } from 'express';

const path = '/user';
const router = Router();

router.post(path, (request: Request, response: Response): void => {
  const { body } = request;

  response.success('success', body);
});

router.put(path, (request: Request, response: Response): void => {
  const { body } = request;

  response.error('error', body);
});

router.delete(path, (request: Request, response: Response): void => {
  const { body } = request;

  response.badRequest('badRequest', body);
});

router.get(path, (request: Request, response: Response): void => {
  const { body } = request;

  response.unauthorized('unauthorized', body);
});

export default router;
