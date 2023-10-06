import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  token: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    SET_TOKEN: (state, action) => {
      state.token = action.payload;
    },
    REMOVE_TOKEN: state => {
      state.token = null;
    },
  },
});

export const {SET_TOKEN, REMOVE_TOKEN} = userSlice.actions;

export default userSlice.reducer;
