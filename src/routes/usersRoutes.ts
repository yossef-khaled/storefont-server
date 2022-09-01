import { Application, Request, Response } from "express";
import User from "../entities/user";
import UsersModel from "../models/usersModel";

const usersModel = new UsersModel;

async function index(req: Request, res: Response) {
    const data = await usersModel.index()
    .catch((err) => {
        console.log(err);
        res.status(400);
        res.send(err.message);
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
    })
    res.status(200);
    res.send(data);
}

const usersRoute = (app: Application) => {
    app.get('/users', index);
    app.get('/users/:id', show);
    app.post('/users', create);
}

export default usersRoute;