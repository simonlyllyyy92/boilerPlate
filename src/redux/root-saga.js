import {all} from 'redux-saga/effects'
import userSaga from './userReducer/user.saga'

export default function* rootSaga() {
    try{
        yield all([
            ...userSaga
        ])
    }catch(e){
        console.log('error caught in rootsaga:', e)
    }
}