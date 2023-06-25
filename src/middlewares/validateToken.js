import jwt from 'jsonwebtoken'
import { DICCIONARY, STATUS_CODES, TOKEN_SECRET } from "../config.js"

export const authRequired = (req, res, next) => {

    const { token } = req.cookies

    if(!token)
    return res.status(STATUS_CODES.UNAUTHORIZED).json({
        message: DICCIONARY.NOTOKEN
    })

    jwt.verify(token, TOKEN_SECRET, (err, user) =>{
        if(err) return res.status(STATUS_CODES.FORBIDDEN).json({
            message: DICCIONARY.INVALIDTOKEN
        })

        req.user = user
    })

    next()
}