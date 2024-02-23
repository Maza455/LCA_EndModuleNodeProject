import Joi from 'joi';

export const register = (req, res, next) => {
    const schema = Joi.object({
        firstName: Joi.string().regex(/^.{2,32}$/),
        lastName: Joi.string().regex(/^.{2,32}$/),
        email: Joi.string().email(),
        password: Joi.string().regex(/^[a-zA-z0-9]{8,32}$/),
    });

    const {
        error
    } = schema.validate(req.body);
    if (error) {
        switch (error.details[0].context.key) {
            case 'firstName':
                res.status(400).json({
                    error: 'First name can have 2-32 characters.'
                });
                break;
            case 'lastName':
                res.status(400).json({
                    error: 'Last name can have 2-32 characters.'
                });
                break;
            case 'email':
                res.status(400).json({
                    error: 'Please provide a valid email address.'
                });
                break;
            case 'password':
                res.status(400).json({
                    error: 'Invalid password format. Only lower case, upper case and numerics is allowed.'
                });
                break;
            default:
                res.status(400).json({
                    error: 'Invalid error in authentication controller.'
                });
        }
    } else {
        next();
    }
};

export const updatePassword = (req, res, next) => {
    const schema = Joi.object({
        password: Joi.string().regex(/^[a-zA-z0-9]{8,32}$/),
    });

    const {
        error
    } = schema.validate(req.body);
    if (error) {
        switch (error.details[0].context.key) {
            case 'password':
                res.status(400).json({
                    error: 'Invalid password format. Only lower case, upper case and numerics is allowed.'
                });
                break;
            default:
                res.status(400).json({
                    error: 'Invalid error in authentication controller.'
                });
        }
    } else {
        next();
    }
};

// import "dotenv/config";
// import jwt from "jsonwebtoken";

// function createToken(user) {
//     let timeToken = 60 * 60
//     return jwt.sign({
//             emailAdd: user.emailAdd,
//             userPwd: user.userPwd
//         },
//         process.env.SECRET_KEY, {
//             expiresIn: timeToken
//         }
//     )
// }


// function verifyToken(req, res, next) {
//     // Retrieve a token from the request headers
//     const token = req.headers['authorization'];

//     if (token) {
//         // Check if the token is valid
//         jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
//             if (err) {
//                 return res.status(401).json({
//                     status: 401,
//                     msg: "Please provide a valid token."
//                 });
//             } else {
//                 // If the token is valid, proceed to the next middleware
//                 next();
//             }
//         });
//     } else {
//         // If no token is provided, return an error response
//         return res.status(401).json({
//             status: 401,
//             msg: "Please provide a valid token."
//         });
//     }
// }

// export {
//     createToken,
//     verifyToken
// }