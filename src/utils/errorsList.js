const errorsList = {
    //name:{type: '', message:''}

    conflict:{type: 'conflict', message:'conflict! this item already exists'},
    notFound:{type: 'notFound', message:'não encontrado'},
    incompleteData:{type: 'incompleteData', message:'faltando dados'},
    invalid:{type: 'invalid', message:'tipo de dado invalido'},
    schema: (errors)=>{
        return { type: 'invalid', message: errors }
    }

    //name:{type: '', message:''}
}
export default errorsList;