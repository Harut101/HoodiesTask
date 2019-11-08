export const initialStateSignIn = {
    phone : null,
    code: null,
    next: false,
    isLogedIn: false
}


export function signIn(state = initialStateSignIn, action){
    switch(action.type){
        case 'ADDPHONE':
        return {
            ...state,
            phone : action.payload.phone,
            next: action.payload.next,
            isLogedIn: action.payload.isLogedIn
        }
        case 'ADDCODE':
        return {
            ...state,
            code: action.payload.code,
            isLogedIn: action.payload.isLogedIn
        }
        case 'EDITPHONE':
            return {
                ...state,
                next: action.payload.next,
            }
        case 'LOGOUT':
        return {
            phone : null,
            code: null,
            next: false,
            isLogedIn: false
        }

        default:
        return state
    }

}