import authReducer from './auth'
import cartReducer from './cart'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    cartReducer,
    authReducer
})

export default allReducers