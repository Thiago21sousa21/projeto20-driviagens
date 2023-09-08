import httpStatus from "http-status"
import errorsList from "../utils/errorsList.js"

const handleErrors = (error, req, res, next)=>{

    if(errorsList[error.type]!==undefined)return res.status(error.status).send(error.message)  

    res.status(httpStatus.INTERNAL_SERVER_ERROR).send('sorry, something went wrong')

}

export default handleErrors

 // if(error.type === 'conflict'){
    //     return res.status(httpStatus.CONFLICT).send(error.message)
    // }

    // if(error.type === 'notFound'){
    //     return res.status(httpStatus.NOT_FOUND).send(error.message)
    // }

    // if(error.type === 'invalid'){
    //     return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.message)
    // }