const validationType = {
    phone: {
        method: /^([0|[0-9]{1,5})?([7-9][0-9]{9})$/,
        valid: false
    },
    
    code: {
        method: '111111',
        valid: false
    },

    user:{
        method: /^[A-Z][a-z]{0,19}[\s,][A-Z][a-z]{0,19}$/
    }
}


export function phoneValidation(name, value){

    return validationType[name].method.test(value);
}

export function codeValidation(name, value){
    return  validationType[name].method === value;
 }

 export function userNameValidation(name, value){
    return  validationType[name].method.test(value);
 }