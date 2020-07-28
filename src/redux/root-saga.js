import { all } from "redux-saga/effects"

import pokermanSaga from "./PokerMan/pokerman.saga"

export default function* rootSaga() {
  try {
    yield all([...pokermanSaga])
  } catch (e) {
    console.log("error caught in rootsaga:", e)
  }
}
