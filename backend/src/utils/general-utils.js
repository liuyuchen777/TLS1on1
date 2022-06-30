import jwt from 'jsonwebtoken';

const jwtSecret = process.env.jwt_secret;

function generateAccessToken(userName, role) {

    return 'Bearer ' + 
        jwt.sign(
            { user: userName, role: role },
            jwtSecret,
            { algorithm: "HS256", expiresIn: 60 * 60 * 24 * 3 }
        );
}

/**
 * abandon authorization method, use express-json to verify jwt now
 */
function authenticateToken(req, res, next) {
    
    const authHeader = req.headers.authorization
    const token = authHeader && authHeader.split(' ')[1]

    if (token == null) return res.status(401).send({ message: "Error: Unauthorized request!" });

    jwt.verify(token, jwtSecret, (err, user) => {
        if (err) return res.status(403).send({ message: "Error: Verify token error fail!" });

        console.log(user);

        next()
    })
}

/**
 * authorization check middleware:
 * role = 2 (Admin) can check and modify all user information
 * role = 0/1 (Student/Teacher) can only modify its own information
 */
function checkUserAuthorization(req, res, next) {
    if (!req.params.username) 
        res.status(500).send({ message: "Error: Sever internal error" });
    else if (!req.auth || !req.auth.user || req.params.username != req.auth.user     // not current authorized user
        || !req.auth.role || req.auth.role != 2) 
        res.status(401).send({ message: "Error: Unathorized operation!" });
    else
        next()
}

export {
    generateAccessToken,
    authenticateToken,
    checkUserAuthorization
}