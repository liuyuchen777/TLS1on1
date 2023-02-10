import express from "express";
import {PREFIX} from "./router";
import { checkHealth, checkPrivateHealth } from "../controllers/health";
import { defaultBehavior } from "../controllers/default";
import { checkJwt } from "../middleware/auth";

function addUtilRouter(app: express.Application) {
  // health
  app.get(PREFIX + "health", checkHealth);
  // protect health
  app.get(PREFIX + "private/health", checkJwt, checkPrivateHealth);
  // default
  app.get("*", defaultBehavior);
  app.post("*", defaultBehavior);
  app.post("*", defaultBehavior);
}

export { addUtilRouter };
