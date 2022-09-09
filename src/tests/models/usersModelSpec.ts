import UsersModel from "../../models/usersModel";
import request from "supertest";

const usersModel: UsersModel = new UsersModel;

describe('Users model', () => {
    it('should have an index method', () => {
        expect(usersModel.index).toBeDefined();
    });

    it('should have a show method', () => {
        expect(usersModel.show).toBeDefined();
    });

    it('should have a create method', () => {
        expect(usersModel.create).toBeDefined();
    });

    it('should return a user after creating one', async () => {
        
        request('localhost:3000')
        .post('/users')
        .send({
            firstname: 'Test',
            lastname: 'User',
            password: 'P@ssword'
        })
        .expect(200)
    });

    it('should show all users', async () => {
        
        const tokenHeader = {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlRlc3RfVXNlciIsImlkIjo4NywiaWF0IjoxNjYyNjUwMjQwfQ.duLlc1-DAq2DT3d9hgrY0VlxCAAuLfsT1R1RUklsSkU"
        }

        request('localhost:3000')
        .get('/users')
        .set(tokenHeader)
        .expect(200)

    });

    it('should show user with id = 1', async () => {
        
        const tokenHeader = {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlRlc3RfVXNlciIsImlkIjo4NywiaWF0IjoxNjYyNjUwMjQwfQ.duLlc1-DAq2DT3d9hgrY0VlxCAAuLfsT1R1RUklsSkU"
        }

        request('localhost:3000')
        .get('/users/1')
        .set(tokenHeader)
        .expect(200)
    });

})