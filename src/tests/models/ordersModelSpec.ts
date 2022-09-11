import OrdersModel from "../../models/ordersModel";
import request from "supertest";
import createToken from "../../utilities/createToken";
import User from "src/entities/user";
import Order from "src/entities/order";

const ordersModel: OrdersModel = new OrdersModel;

const firstUser: User = {
    id: 1,
    firstname: 'Test',
    lastname: 'User',
    password: 'P@ssw0rd'
};

let firstUserAuthHeader: object;

describe('Orders model', () => {
    beforeAll(() => {
        const firstUserToken = createToken(firstUser);

        firstUserAuthHeader = {'Authorization': `Bearer ${firstUserToken}`};
    })
    
    it('should have an orders history method', () => {
        expect(ordersModel.ordersHistory).toBeDefined();
    });

    it('should have a current order method', () => {
        expect(ordersModel.currentOrder).toBeDefined();
    });

    it('should have a create method', () => {
        expect(ordersModel.create).toBeDefined();
    });

    it('should return a new order after creating one', async () => {

        const response = await request('localhost:3000')
        .post('/orders')
        .set(firstUserAuthHeader)
        
        expect(response.body).toEqual({
            id: 1,
            orderStatus: 'inCart',
            userId: 1
        })
        expect(response.statusCode).toEqual(200);
    });

    it('should get the orders history for the user', async () => {
        
        const response = await request('localhost:3000')
        .get('/orders')
        .set(firstUserAuthHeader)
        
        expect(response.body).toEqual([{
            id: 1,
            orderStatus: 'inCart',
            userId: 1
        }])
        expect(response.statusCode).toEqual(200);
    });

    it('current order method should return the current order', async () => {
        
        const response = await request('localhost:3000')
        .get('/orders/current')
        .set(firstUserAuthHeader)
        
        expect(response.body).toEqual({
            id: 1,
            orderStatus: 'inCart',
            userId: 1
        })
        expect(response.statusCode).toEqual(200);
    });

    it('should create a new order', async () => {
        const expectedResult = await ordersModel.create(2);
        expect(expectedResult)
        .toEqual({
            id: 2,
            orderStatus: 'inCart',
            userId: 2
        });
    });

    it('should get order history for user with id = 2', async () => {
        const expectedResult = await ordersModel.ordersHistory(2);
        expect(expectedResult)
        .toEqual([{
            id: 2,
            orderStatus: 'inCart',
            userId: 2
        }]);
    });

    it('current order method should return the current order for user with id = 2', async () => {
        
        const expectedResult: Order = await ordersModel.currentOrder(2);
        expect(expectedResult).toEqual({
            id: 2,
            orderStatus: 'inCart',
            userId: 2
        })
    });

})