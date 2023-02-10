import express from "express";

function defaultBehavior(req: express.Request, res: express.Response): void {
  res.status(404).json({
    msg: "Behavior not defined!"
  });
}

export {
  defaultBehavior
}