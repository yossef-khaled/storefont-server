//Import from express
import express, { Request, Response } from 'express'

//IMport other packages
import bodyParser from 'body-parser'

//Import routes
import usersRoute from './routes/usersRoutes'
import productsRoutes from './routes/productsRoutes'
import ordersRoutes from './routes/ordersRoutes'

const app: express.Application = express()
const port: string = "3000"

app.use(bodyParser.json())

app.get('/', function (_: Request, res: Response) {
    res.send('Hello World!')
})

// call all the routes
usersRoute(app);
productsRoutes(app);
ordersRoutes(app);

app.listen(3000, function () {
    console.log(`🚀🚀 Storefront server started on port ${port}...`);
})