import OrdersModel from "../../models/ordersModel";
import request from "supertest";

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

        const tokenHeader = {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlRlc3RfVXNlciIsImlkIjo4NywiaWF0IjoxNjYyNjUwMjQwfQ.duLlc1-DAq2DT3d9hgrY0VlxCAAuLfsT1R1RUklsSkU"
        }

        request('localhost:3000')
        .post('/orders')
        .set(tokenHeader)
        .expect(200)
    });

    it('should get the orders history for the user', async () => {
        const tokenHeader = {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlRlc3RfVXNlciIsImlkIjo4NywiaWF0IjoxNjYyNjUwMjQwfQ.duLlc1-DAq2DT3d9hgrY0VlxCAAuLfsT1R1RUklsSkU"
        }

        request('localhost:3000')
        .get('/orders')
        .set(tokenHeader)
        .expect(200)
    });

    it('current order method should return the current order', async () => {
        
        const tokenHeader = {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlRlc3RfVXNlciIsImlkIjo4NywiaWF0IjoxNjYyNjUwMjQwfQ.duLlc1-DAq2DT3d9hgrY0VlxCAAuLfsT1R1RUklsSkU"
        }

        request('localhost:3000')
        .get('/orders')
        .set(tokenHeader)
        .expect(200)
    });

})