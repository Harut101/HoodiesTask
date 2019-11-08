export function addUsersAction(users) {
    return {
        type:'ADD_USERS',
        payload:{
          users
        }
      }
}

export function addUserAction(first_name, last_name) {
    return {
          type:'ADD_USER',
          payload:{
            user: {
              first_name,
              last_name,
              id: new Date().getMilliseconds()
            }
          }
        }
}

export function deleteUsersAction(id) {
    return {
            type:'DELETE_USER',
            payload:{
                id: id
            }
        }
}

export function changedNameAction(name) {
    return {
            type:'CHANGE_NAME',
            payload:{
                name
            }
        }
}

export function logOutAction() {
    return {
            type:'LOGOUT',
            payload:{
                isLogedIn: false
            }
        }
}