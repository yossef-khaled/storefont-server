function extractDataFromToken (token: string) {
    const data = JSON.parse(Buffer.from(token.split('.')[1], "base64").toString())
    const userFullName = data.username.split('_');
    return {
        id: data.id,
        firstname: userFullName[0],
        lastname: userFullName[1]
    }
} 

export default extractDataFromToken;