import bodyParser from "body-parser";
import { expressjwt as jwt } from "express-jwt";
import cors from "cors";
import express from "express";
import { JWT_SECRET } from "./utils/constant";

const publicRoutes = ["/api/signup", "/api/login", "/api/health"];

function configMiddleware(app: express.Application) {
  // request body parser
  app.use(bodyParser.json());

  app.use(
    jwt({
      secret: JWT_SECRET,
      algorithms: ["HS256"],
    }).unless({
      path: publicRoutes,
    })
  );

  // cross-region
  app.use(cors());
}

export default configMiddleware;
