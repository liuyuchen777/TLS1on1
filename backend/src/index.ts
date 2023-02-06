import express from "express";

import "./config.js";
import { addRouter } from "./routes/router.js";
import configMiddleware from "./config-middleware.js";
import { PORT } from "./utils/constant";

const app = express();

(async function main() {
  // connect mongodb

  // initialize DB

  // config express midlleware
  configMiddleware(app);

  // add api
  addRouter(app);

  // start express app
  app.listen(PORT, () => {
    console.log(`SeverStart -> express listen on ${PORT}`);
  });
})();
