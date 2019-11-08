export function signInActions(type, stateKey, next, phone, country) {
    return {
        type: type,
        payload: {
            [stateKey]: `${country}${phone}`,
            next: next,
        }
    }
}

export function editPhone(){
    return {
          type: 'EDITPHONE',
          payload: {
            next: false,
          }
        }
}

export function addCode(code){
    return {
        type: 'ADDCODE',
        payload: {
          code: code,
          next: true,
          isLogedIn: true
        }
      }
}
