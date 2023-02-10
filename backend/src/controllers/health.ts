import express from "express";

function checkHealth(req: express.Request, res: express.Response): void {
  res.json({
    msg: "Hello World!"
  });
}

function checkPrivateHealth(req: express.Request, res: express.Response): void {
  console.log(`user id: ${req.auth?.payload.sub}`)
  res.json({
    msg: "Hello World Privately!"
  });
}

export {
  checkHealth,
  checkPrivateHealth
};
