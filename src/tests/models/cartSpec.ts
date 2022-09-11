import User from "src/entities/user";
import createToken from "../../utilities/createToken";
import request from "supertest";

const firstUser: User = {
    id: 1,
    firstname: 'Test',
    lastname: 'User',
    password: 'P@ssw0rd'
};

let firstUserAuthHeader: object;


describe('Cart', () => {

    beforeAll(() => {
        const firstUserToken = createToken(firstUser);

        firstUserAuthHeader = {'Authorization': `Bearer ${firstUserToken}`};
    })

    it('should add a product to cart', async () => {

        const response = await request('localhost:3000')
        .post('/products/addToCart=1')
        .set(firstUserAuthHeader)
        .send({
            productId: 1,
            quantity: 3
        })

        expect(response.body).toEqual({
            orderId: 1,
            productId: 1,
            quantity: 3
        })
        expect(response.statusCode).toEqual(200)
    });

    it('should return top product', async () => {
    
        const response = await request('localhost:3000')
        .get('/products/key=topProducts&value=1')
        .set(firstUserAuthHeader)
        
        expect(response.body).toEqual([{
            productId: 1,
            timesOrdered: 1
        }])
        expect(response.statusCode).toEqual(200);
    });
})