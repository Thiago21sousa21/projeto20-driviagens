import httpStatus from "http-status"

const handleErrors = (error, req, res, next)=>{

    if(error.type === 'conflict'){
        return res.status(httpStatus.CONFLICT).send(error.message)
    }

    if(error.type === 'notFound'){
        return res.status(httpStatus.NOT_FOUND).send(error.message)
    }

    if(error.type === 'invalid'){
        return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.message)
    }

    res.status(httpStatus.INTERNAL_SERVER_ERROR).send('sorry, something went wrong')

}

export default handleErrors