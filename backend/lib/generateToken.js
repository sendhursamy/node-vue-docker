var jwt = require('jsonwebtoken');

const getToken = async (agentCode) =>{
    console.log(process.env.JWT_SECRET);
    const userToken = jwt.sign({
        data: agentCode
      }, process.env.JWT_SECRET, { expiresIn: '1d'});

    const refereshToken = jwt.sign({
    data: agentCode
    }, process.env.JWT_SECRET, { expiresIn: '7d' });

    const token = {
        userToken,
        // refereshToken
    }
    console.log(token);
    return token
}

module.exports = getToken