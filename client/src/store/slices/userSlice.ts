import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../index';

interface UserState {
  users: { email: string; number: number | undefined }[];
  loading?: boolean;
  error?: string;
}

export interface UserPayload {
  email: string;
  number: number | undefined;
}

const initialState: UserState = {
  users: [],
  loading: false,
  error: '',
};

export const dataSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    find(state, action: PayloadAction<UserPayload>) {
      state.users = [];
      state.loading = true;
      state.error = '';
    },
    findUsersSuccess: (state, action) => {
      state.users.push(...action.payload);
      state.loading = false;
    },
    findUsersFail: (state, action) => {
      state.error = action.payload.message;
      state.loading = false;
    },
  },
});

export const { find, findUsersSuccess, findUsersFail } = dataSlice.actions;

export const selectUser = (state: RootState) => state.users;

export default dataSlice.reducer;
