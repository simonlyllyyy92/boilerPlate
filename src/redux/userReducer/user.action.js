import {userActionTypes} from './user.actionType'

export const demoAction = (payload) => ({
    type: userActionTypes.SET_CURRENT_USER,
    payload
})

export const sagaAction = (payload) => ({
    type: userActionTypes.SET_SAGA_USER,
    payload
})