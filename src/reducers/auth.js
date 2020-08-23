const authReducer = (state={isLoggedIn:false}, action) =>{
    switch(action.type){
        case 'USER_LOGIN':
            return state
        default:
            return state
    }
}
export default authReducer