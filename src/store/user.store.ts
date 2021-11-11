import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface userProps {
  email: string;
  token: string;
  name: string;
}

const user = createSlice({
  name: 'user',
  initialState: {
    email: '',
    token: '',
    name: '',
  },
  reducers: {
    saveUser(state, action: PayloadAction<userProps>) {
      state.token = action.payload.token;
      state.email = '';
      state.name = '';
    },
  },
});

export const {saveUser} = user.actions;
export default user.reducer;
