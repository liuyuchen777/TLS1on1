import { addUserRouter } from './user.router.js';

function addRouter(app) {
  addUserRouter(app);
}

export {
  addRouter
}