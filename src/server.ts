import express from 'express';
import bodyParser from 'body-parser';
import customResponse from './utils/customResponse';
import userController from './controllers/userController';

const server = express();

server.use(bodyParser.json());

server.use(customResponse);

server.use(userController);

server.listen(3000);
