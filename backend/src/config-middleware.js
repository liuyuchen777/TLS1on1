import bodyParser from 'body-parser';
import { expressjwt as jwt } from 'express-jwt';

const publicRoutes = [
    '/api/signup',
    '/api/login'
];
const jwtSecret = process.env.jwt_secret;

function configMiddleware(app) {
    // requst body parser
    app.use(bodyParser.json());

    // jwt 
    app.use(
        jwt({
          secret: jwtSecret,
          algorithms: ["HS256"],
        }).unless({
          path: publicRoutes,
        }),
    );
}   

export default configMiddleware;