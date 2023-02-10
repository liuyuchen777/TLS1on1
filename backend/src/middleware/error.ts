import { InvalidTokenError, UnauthorizedError, } from "express-oauth2-jwt-bearer"
import express from "express";

const errorHandler = (error: Error, req: express.Request, response: express.Response, next: express.NextFunction) => {
  if (error instanceof InvalidTokenError) {
    const message = "Bad credentials";
    response.status(error.status).json({ message });
    return;
  }

  if (error instanceof UnauthorizedError) {
    const message = "Requires authentication";
    response.status(error.status).json({ message });
    return;
  }

  const status = 500;
  const message = "Internal Server Error";

  response.status(status).json({ message });
};

export {
  errorHandler
};
