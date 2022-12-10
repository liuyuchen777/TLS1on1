import { addUserRouter } from './user.router.js';
import express from 'express';

function addRouter(app: express.Application) {
  addUserRouter(app);
}

export {
  addRouter
}