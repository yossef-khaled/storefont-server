import OrdersModel from "../../models/ordersModel";
import dotenv from 'dotenv';

const ordersModel: OrdersModel = new OrdersModel;

dotenv.config();

describe('Orders model', () => {
    beforeEach(() => {
        process.env.ENV = 'test';
    });
   
    it('should have an orders history method', () => {
        expect(ordersModel.ordersHistory).toBeDefined();
    });

    it('should have a current order method', () => {
        expect(ordersModel.currentOrder).toBeDefined();
    });

    it('should have a create method', () => {
        expect(ordersModel.create).toBeDefined();
    });

    it('should create a new order', async () => {
        const expectedResult = await ordersModel.create(1);
        expect(expectedResult)
        .toEqual({
            id: 1,
            orderStatus: 'inCart',
            userId: 1
        });
    });

    it('current order method should return the current order', async () => {
        
        const expectedResult = await ordersModel.currentOrder(1);
        expect(expectedResult).toEqual({
            id: 1,
            orderStatus: 'inCart',
            userId: 1
        })
    });

})