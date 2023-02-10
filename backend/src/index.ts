import express from "express";

import { addRouter } from "./routes/router.js";
import { errorHandler } from "./middleware/error";

const app = express();

(async function main() {
  // connect mongodb

  // initialize DB

  // config cors

  // add api
  addRouter(app);
  
  // config middleware
  app.use(errorHandler);

  // start express app
  app.listen(process.env.PORT, () => {
    console.log(`SeverStart -> express listen on ${process.env.PORT}`);
  });
})();
