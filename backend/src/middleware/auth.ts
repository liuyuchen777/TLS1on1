import { auth } from "express-oauth2-jwt-bearer";

const checkJwt = auth({
  audience: process.env.AUTH0_IDENTIFIER,
  issuerBaseURL: process.env.AUTH0_BASE_URL,
});

export {
  checkJwt
};
