import { 
    createUser, 
    updateUserBasicInformation,
    addUserEducationRecord
} from '../controller/user.controller.js';

function addUserRouter(app) {
    app.post("/api/user", createUser);
    app.post("/api/user/:username", updateUserBasicInformation);
    app.post("/api/user/:username/edu", addUserEducationRecord);
}

export {
    addUserRouter
};