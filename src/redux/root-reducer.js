import {combineReducers} from 'redux'

import userReducer from './reducer1/user.reducer'

export default combineReducers({
    user: userReducer
})