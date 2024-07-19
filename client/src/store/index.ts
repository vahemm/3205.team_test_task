import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import saga from 'redux-saga';
import { RootSaga } from './saga';

const sagaMiddleware = saga();
export const store = configureStore({
  reducer: {
    users: userReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(RootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
