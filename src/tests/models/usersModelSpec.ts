import UsersModel from "../../models/usersModel";
import User from "../../entities/user";

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
        //@ts-ignore
        const user: User = {
            id: 1,
            firstname: 'Test',
            lastname: 'User',
            password: "P@ssw0rd"
        }
        const expectedResult = await usersModel.create(user);
        //@ts-ignore
        expect(expectedResult)
        .toEqual(user);
    });

    it('should show all users', async () => {
        // 
        const expectedResult: User[] = await usersModel.index();
        //@ts-ignore
        expect(expectedResult)
        .toEqual([{
            id: 1,
            firstname: 'Test',
            lastname: 'User',
            password: "P@ssw0rd" 
        }]);
    });

    it('should show user with id = 1', async () => {
        // 
        const expectedResult: User = await usersModel.show(1);
        //@ts-ignore
        expect(expectedResult)
        .toEqual({
            id: 1,
            firstname: 'Test',
            lastname: 'User',
            password: "P@ssw0rd" 
        });
    });

})