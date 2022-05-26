import jwt  from 'jsonwebtoken';
import User from '../models/userModel.js';

const { JWT_TOKEN_SECRET, TOKEN_EXPIRE_SECONDS } = process.env

const generateToken = async (_id, login) => {
    return new Promise((resolve, reject) => {
        jwt.sign({ _id, login }, JWT_TOKEN_SECRET, { expiresIn: parseInt(TOKEN_EXPIRE_SECONDS) }, (err, token) => {
            if (err) {
                reject(new Error('Token generation unsuccessful'))
            }
            resolve(token)
        })
    })
}

const verifyToken = (req, res, next) => {
    const authHeader = req.header('authorization')
    const token = authHeader && authHeader.split(' ')[1]
    if (token === null) return res.sendStatus(401)

    jwt.verify(token, JWT_TOKEN_SECRET, (err, decoded) => {
        if (err) return res.sendStatus(403)
        req._id = decoded._id
        req.login = decoded.login
        next()
    })
}


const validateToken = (req, res) => {
    const authHeader = req.header('authorization')
    const token = authHeader && authHeader.split(' ')[1]
    let decodedD = {}
    if (token === null) return res.sendStatus(401)
    jwt.verify(token, JWT_TOKEN_SECRET, (err, decoded) => {
        if (err) return res.sendStatus(403)
        const { _id, login } = decoded
        User.findById(_id).then(user => {
            res.send(user)
        }).catch(err => res.status(500).send(err))
    })
    return decodedD
}

export default {
    generateToken,
    verifyToken,
    validateToken
}