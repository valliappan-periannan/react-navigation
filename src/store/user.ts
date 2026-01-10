import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface User {
  name: string;
}

const initialValue: User = {
  name: '',
};

// reducer - 'update the state Value'
// action - 'will trigger the reducer'

// slicer = reducer + action

const userSlicer = createSlice({
  name: 'userData',
  initialState: initialValue,
  reducers: {
    updateName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});
export const { updateName } = userSlicer.actions;

export default userSlicer.reducer;
