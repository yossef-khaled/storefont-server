import OrdersModel from "../../models/ordersModel";

const ordersModel: OrdersModel = new OrdersModel;

describe('Orders model', () => {
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

    it('should get the orders history for the user', async () => {
        const expectedResult = await ordersModel.ordersHistory(1);
        expect(expectedResult)
        .toEqual([{
            id: 1,
            orderStatus: 'inCart',
            userId: 1
        }]);
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