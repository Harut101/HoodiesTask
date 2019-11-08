export const initialStateProfile = {
    users: [],
    ownerName: 'Mark Zuckerberg'
}

export function profile(state = initialStateProfile, action){
    switch(action.type){
        case "ADD_USERS" :
        return{
            ...state,
            users:  action.payload.users
        }

        case "ADD_USER" :
        return{
            ...state,
            users: [action.payload.user, ...state.users]
        }

        case 'DELETE_USER' :
        return{
            ...state,
            users: state.users.filter(user => user.id !== action.payload.id)
        }

        case 'CHANGE_NAME' :
        return{
            ...state,
            ownerName:  action.payload.name
        }

        default: 
        return state
    }
}