///Import from express 
import { Application, Request, Response } from "express";

//Import utilities
import isAuth from "../utilities/isAuth";

//Import entities
import User from "../entities/user";

//Import models 
import UsersModel from "../models/usersModel";

//Improt utilities
import createToken from "../utilities/createToken";

const usersModel = new UsersModel;

async function index(_: Request, res: Response) {
    const data = await usersModel.index()
    .catch((err) => {
        console.log(err);
        res.status(400);
        res.send(err.message);
        return;
    })
    res.status(200);
    res.send(data);
}

async function show(req: Request, res: Response) {
    const data = await usersModel.show(parseInt(req.params.id))
    .catch((err) => {
        console.log(err);
        res.status(400);
        res.send(err.message);
        return;
    })
    res.status(200);
    res.send(data);
}

async function create(req: Request, res: Response) {

    //@ts-ignore
    const user: User = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        password: req.body.password,
    }
    const data = await usersModel.create(user)
    .catch((err) => {
        console.log(err);
        res.status(400);
        res.send(err.message);
        return;
    })
    const token = createToken(data!)
    res.status(200);
    res.send({
        token,
        data
    });
}

const usersRoute = (app: Application) => {
    app.get('/users', isAuth, index);
    app.get('/users/:id', isAuth, show);
    app.post('/users', isAuth, create);
}

export default usersRoute;