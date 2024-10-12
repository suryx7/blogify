const JWT = require("jsonwebtoken");
const { join } = require("path");

const secert = "Batman@123";

function createTokenForUSer(user){
    const payload = {
        _id: user._id,
        email: user.email,
        profileImageURL: user.profileImageURL,
        role: user.role
    };
    const token = JWT.sign(payload, secert);
    return token;
}

function validateToken(token){
    const payload = JWT.verify(token, secert);
    return payload;
}

module.exports = { 
    createTokenForUSer,
    validateToken
}