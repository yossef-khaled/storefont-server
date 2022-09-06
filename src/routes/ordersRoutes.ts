import { Application, Request, Response } from "express";
import isAuth from "../utilities/isAuth";
import OrdersModel from "../models/ordersModel";
import extractDataFromToken from "../utilities/extractDataFromToken";

const ordersModel = new OrdersModel;

async function ordersHistory(req: Request, res: Response) {
    const token = req.headers.authorization ? req.headers.authorization?.split(' ')[1] : '';
    const userData = extractDataFromToken(token);

    const data = await ordersModel.ordersHistory(userData.id)
    .catch((err) => {
        console.log(err);
        res.status(400);
        res.send(err.message);
        return;
    })
    res.status(200);
    res.send(data);
}

async function currentOrder(req: Request, res: Response) {
    const token = req.headers.authorization ? req.headers.authorization?.split(' ')[1] : '';
    const userData = extractDataFromToken(token);

    const data = await ordersModel.currentOrder(userData.id)
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
    const token = req.headers.authorization ? req.headers.authorization?.split(' ')[1] : '';
    const userData = extractDataFromToken(token);

    const data = await ordersModel.create(userData.id)
    .catch((err) => {
        console.log(err);
        res.status(400);
        res.send(err.message);
        return;
    })
    res.status(200);
    res.send(data);
}

const ordersRoutes = (app: Application) => {
    app.get('/orders', isAuth, ordersHistory);
    app.get('/orders/current', isAuth, currentOrder);
    app.post('/orders', isAuth, create);
}

export default ordersRoutes;