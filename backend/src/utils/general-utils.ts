import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import { JWT_SECRET } from "./constant";

function generateAccessToken(userName: string, role: number) {
  return (
    "Bearer " +
    jwt.sign({ user: userName, role: role }, JWT_SECRET, {
      algorithm: "HS256",
      expiresIn: 60 * 60 * 24 * 3,
    })
  );
}

/**
 * abandon authorization method, use express-json to verify jwt now
 */
function authenticateToken(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null)
    return res.status(401).send({ message: "Error: Unauthorized request!" });

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err)
      return res
        .status(403)
        .send({ message: "Error: Verify token error fail!" });

    console.log(user);

    next();
  });
}
