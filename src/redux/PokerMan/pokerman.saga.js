import { fork, put, takeLatest, select } from "redux-saga/effects"
import { pokermanAction } from "./actionType"
import axios from "axios"

//handlers
function* getPokerManHandler(action) {
  // const {a, b} = action.payload

  // const response = yield axios.get/post/...
  // let state = yield select(state => state.aaa.bbb)
  try {
    const response = yield axios.get(
      "https://cdn.theprojectfactory.com/pokemon/get.php"
    )
    yield put({
      type: pokermanAction.DISPLAY_POKERMAN_SUCCESS,
      payload: response,
    })
  } catch (e) {
    console.log(e)
  }
}

//watchers

function* watchGetPokerMan() {
  yield takeLatest(pokermanAction.DISPLAY_POKERMAN, getPokerManHandler)
}

const sagas = [fork(watchGetPokerMan)]

export default sagas
