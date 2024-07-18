import { all, fork } from "redux-saga/effects";

import { userSaga } from "./userSaga";

export function* RootSaga() {
  yield all([userSaga].map(fork));
}
