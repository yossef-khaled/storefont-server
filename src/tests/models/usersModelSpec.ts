import UsersModel from "../../models/usersModel";
import request from "supertest";
import User from "src/entities/user";

const usersModel: UsersModel = new UsersModel;

const firstUser: User = {
    id: 1,
    firstname: 'Test',
    lastname: 'User',
    password: 'P@ssw0rd'
};

const secondUser: User = {
    id: 2,
    firstname: 'Test',
    lastname: 'User2',
    password: 'P@ssw0rd'
};

let firstUserAuthHeader: object;

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
        
        const response = await request('localhost:3000')
        .post('/users')
        .send(firstUser)

        firstUserAuthHeader = {'Authorization': `Bearer ${response.body.token}`};
        
        expect(response.statusCode).toEqual(200);
        expect(response.body.data).toEqual({
            id: 1,
            firstname: 'Test',
            lastname: 'User',
            password: 'P@ssw0rd'
        });
    });

    it('should show user with id = 1', async () => {

        request('localhost:3000')
        .get('/users/1')
        .set(firstUserAuthHeader)
        .expect(200)
    });


    it('should return a user after creating one', async () => {
        
        const expectedResult = await usersModel.create(secondUser);
        
        expect(expectedResult)
        .toEqual(secondUser);
    });

    it('should show all users', async () => {
        const expectedResult: User[] = await usersModel.index();
        expect(expectedResult)
        .toEqual([firstUser, secondUser]);
    });

    it('should show user with id = 2', async () => {
        const expectedResult: User = await usersModel.show(2);
        expect(expectedResult)
        .toEqual(secondUser);
    });

})