import { 
  createUser, 
  updateUserBasicInformation,
  addUserEducationRecord,
  updateUserEducationRecord,
  getUser,
  loginUser
} from '../controller/user.controller.js';
import { checkUserAuthorization } from '../utils/general-utils.js';

function addUserRouter(app) {

  // protected
  app.post("/api/user/basic/:username", checkUserAuthorization, updateUserBasicInformation);
  app.post("/api/user/edu/:username", checkUserAuthorization, addUserEducationRecord);
  app.post("/api/user/edu/:username/:id", checkUserAuthorization, updateUserEducationRecord);
  app.get("/api/user/:username", checkUserAuthorization, getUser);
  
  // unprotected
  app.post("/api/signup", createUser);
  app.post("/api/login", loginUser);
}

export {
  addUserRouter
};