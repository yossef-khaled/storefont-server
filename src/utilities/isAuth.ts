import { Request, Response } from "express";
import Jwt  from "jsonwebtoken";


function isAuth(req: Request, res: Response, next: Function) {
    const token = req.headers.authorization ? req.headers.authorization.split(' ')[1] : '';
    try {
        Jwt.verify(token, `${process.env.TOKEN_SECRET}`);
        next();
    }
    catch (err) {
        res.status(401);
        res.send('<div><p>Invalid token.</p></div>');
    }
}

export default isAuth;