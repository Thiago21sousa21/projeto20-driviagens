import httpStatus from "http-status";

const errorsList = {
    // name:{
    //     type: '', 
    //     message:'' , 
    //     status: httpStatus
    // }

    conflict:{
        type: 'conflict',
        message:'conflict! this item already exists',
        status: httpStatus.CONFLICT
    },
    notFound:(item = 'item')=>{
        return {
            type: 'notFound',
            message:`${item} not found`,
            status: httpStatus.NOT_FOUND
        }
    },
    schema: (errors)=>{
        return { 
            type: 'schema',
            message: errors,
            status: httpStatus.UNPROCESSABLE_ENTITY
        }
    },
    internal:{
        type: 'internal', 
        message:'sorry, something went wrong' , 
        status: httpStatus.INTERNAL_SERVER_ERROR
    },
    equalCities:{
        type: 'equalCities',
        message:'origin and destination cannot be the same',
        status: httpStatus.CONFLICT
    },
    invalidDate: { 
            type: 'invalidDate',
            message: 'the flight date needs to be greater than the current date',
            status: httpStatus.UNPROCESSABLE_ENTITY
    }

}
export default errorsList;