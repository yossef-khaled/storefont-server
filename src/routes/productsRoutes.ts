import { Application, Request, Response } from "express";
import ProductsModel from "../models/productsModel";
import Product from "../entities/product";
import isAuth from "../utilities/isAuth";

const productsModel = new ProductsModel;

async function index(_: Request, res: Response) {
    const data = await productsModel.index()
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
    console.log('Inside show function');
    const data = req.params['key'] == 'id' ? await productsModel.show(parseInt(req.params['value']))
    : req.params['key'] == 'category' ? await productsModel.productsByCategory(req.params['value'])
    : await productsModel.topProducts()
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
    
    // @ts-ignore
    const product: Product = {
        name: req.body.name,
        price: req.body.price,
        category: req.body.category,
    }
    const data = await productsModel.create(product)
    .catch((err) => {
        console.log(err);
        res.status(400);
        res.send(err.message);
        return;
    })
    res.status(200);
    res.send(data);
}

const productsRoutes = (app: Application) => {
    app.get('/products', index);
    app.get('/products/:key=:value', show);
    app.post('/products', isAuth, create);
}

export default productsRoutes;