import {fork, put, takeLatest, select} from 'redux-saga/effects'
import {userActionTypes} from './user.actionType'

//handlers
function* sagaHandlerDemo(action) {
    // const {a, b} = action.payload
    // const response = yield axios.get/post/...
    // let state = yield select(state => state.aaa.bbb)
    try{
        yield put({
            type: userActionTypes.SET_SAGA_USER_SUCCESS,
            payload: action.payload
        })
    }catch(e) {
        console.log(e)
    }
}

//watchers
function* sagaWatcherDemo(){
    yield takeLatest(userActionTypes.SET_SAGA_USER, sagaHandlerDemo)
}

const sagas = [
    fork(sagaWatcherDemo)
]

export default sagas