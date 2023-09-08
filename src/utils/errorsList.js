const errorsList = {
    //name:{type: '', message:''}

    conflict:{type: 'conflict', message:'conflict! this item already exists'},
    notFound:{type: 'notFound', message:'não encontrado'},
    schema: (errors)=>{
        return { type: 'invalid', message: errors }
    }

    //name:{type: '', message:''}
}
export default errorsList;