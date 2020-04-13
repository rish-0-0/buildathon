import jwt from 'jsonwebtoken';
import { auth } from '../firebase';
import { success_response, bad_request_response, error_response } from '../helpers/responses';

const HS256_KEY = process.env.HS256_KEY;

export const signup = (req, res) => {
    auth().createUser({
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        displayName: req.body.displayName,
    })
    .then((user) => {
        const obj = {
            name: user.displayName,
            email: user.email,
            phoneNumber: user.phoneNumber,
        };
        const token = jwt.sign(obj, HS256_KEY);
        success_response(res, {
            success: true,
            ...obj,
            token,
        })
    })
    .catch(err => {
        error_response(res, err.code);
    });
};

export const check = (req, res) => {
    auth().getUserByPhoneNumber(req.body.phoneNumber)
    .then((user) => {
        const obj = {
            displayName: user.displayName,
            email: user.email,
            phoneNumber: user.phoneNumber,
        };
        const token = jwt.sign(obj, HS256_KEY);
        success_response(res, {
            success: true,
            ...obj,
            token,
        });
    })
    .catch(error => {
        switch(error.code) {
            case 'auth/user-not-found':
                success_response(res, {
                    success: false,
                });
                break;
            default:
                error_response(res, err.code);
                break;
        }
    });
};