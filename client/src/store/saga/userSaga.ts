import { call, put, takeLatest } from 'redux-saga/effects';
import { find, findUsersFail, findUsersSuccess } from '../slices/userSlice';
import { Api } from '../../dal/Api';

function* handleFindUsers(action: ReturnType<typeof find>) {
  try {
    const { data } = yield call(Api.find, action.payload);
    yield put(findUsersSuccess(data));
  } catch (e: any) {
    yield put(findUsersFail(e));
  }
}

export function* userSaga() {
  yield takeLatest(find.type, handleFindUsers);
}
