import { Application, Request, Response } from "express";
import ProductsModel from "src/models/productsModel";
import Product from "../entities/product";

const productsModel = new ProductsModel;

async function index(_: Request, res: Response) {
    const data = await productsModel.index()
    .catch((err) => {
        console.log(err);
        res.status(400);
        res.send(err.message);
    })
    res.status(200);
    res.send(data);
}

async function show(req: Request, res: Response) {
    const data = await productsModel.show(parseInt(req.params.id))
    .catch((err) => {
        console.log(err);
        res.status(400);
        res.send(err.message);
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
    })
    res.status(200);
    res.send(data);
}

async function productsByCategory(req: Request, res: Response) {
    const data = await productsModel.productsByCategory(req.params.category)
    .catch((err) => {
        console.log(err);
        res.status(400);
        res.send(err.message);
    })
    res.status(200);
    res.send(data);
}

async function topProducts(_: Request, res: Response) {
    const data = await productsModel.topProducts()
    .catch((err) => {
        res.status(400);
        res.send(err.message)
    })
    res.status(200);
    res.send(data);
}

const productsRoutes = (app: Application) => {
    app.get('/products', index);
    app.get('/products/:id', show);
    app.post('/products', create);
    app.get('/products/:category', productsByCategory);
    app.post('/products/top5', topProducts);
}

export default productsRoutes;