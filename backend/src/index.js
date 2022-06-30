import express from 'express';

import './config.js';
import { connect as mongooseConnect } from './db/db.js';
import { initializeDB } from './db/db-insert.js';
import { addRouter } from './routes/router.js';
import configMiddleware from './config-middleware.js';

const app = express();
const port = process.env.port;

(async function main() {

    // connect mongodb
    await mongooseConnect();

    // initialize DB
    // await initializeDB(true);   // true to insert test user

    // config express midlleware
    configMiddleware(app);

    // add api
    addRouter(app);

    // start express app
    app.listen(port, () => {
        console.log(`SeverStart -> express listen on ${port}`);
    });
})();