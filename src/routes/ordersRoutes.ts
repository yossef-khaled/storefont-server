import { Application, Request, Response } from "express";
import isAuth from "../utilities/isAuth";
import OrdersModel from "../models/ordersModel";

const ordersModel = new OrdersModel;

async function ordersHistory(req: Request, res: Response) {
    const data = await ordersModel.ordersHistory(req.body.userId)
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
    const data = await ordersModel.currentOrder(parseInt(req.body.userId))
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
    app.get('/orders/currentOrder', isAuth, currentOrder);
}

export default ordersRoutes;