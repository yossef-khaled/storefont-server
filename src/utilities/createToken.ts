//Import from jwt
import Jwt from "jsonwebtoken";
import User from "../entities/user";

function createToken(user: User): string {
    const token = Jwt.sign(
        {
            username: `${user.firstname}_${user.lastname}`, 
            id: user.id
        }, 
        `${process.env.TOKEN_SECRET}`
    );
    
    return token;
}

export default createToken;