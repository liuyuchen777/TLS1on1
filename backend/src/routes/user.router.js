import { 
    createUser, 
    updateUserBasicInformation,
    addUserEducationRecord,
    updateUserEducationRecord,
    getUser,
    loginUser
} from '../controller/user.controller.js';

function addUserRouter(app) {
    // protected
    app.post("/api/user/:username", updateUserBasicInformation);
    app.post("/api/user/edu/:username", addUserEducationRecord);
    app.post("/api/user/edu/:username/:id", updateUserEducationRecord);
    app.get("/api/user/:username", getUser);
    
    // unprotected
    app.post("/api/signup", createUser);
    app.post("/api/login", loginUser);
}

export {
    addUserRouter
};