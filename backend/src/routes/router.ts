import { addUserRouter } from "./user.router.js";
import { addUtilRouter } from "./util.router.js";
import express from "express";

const PREFIX = "/api/v1/";

function addRouter(app: express.Application) {
  // user profile
  addUserRouter(app);
  // default route
  addUtilRouter(app);
}

export { 
  addRouter,
  PREFIX 
};
