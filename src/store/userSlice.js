import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  uid: null,
  displayName: null,
  email: null,
  photoUrl: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUserToStore(state, actions) {
      state.email = actions.payload.email;
      state.displayName = actions.payload.displayName;
      state.uid = actions.payload.uid;
      state.photoUrl = actions.payload.photoUrl;
    },
    clearUserFromStore(state) {
      state.email = null;
      state.displayName = null;
      state.uid = null;
      state.photoUrl = null;
    },
  },
});

export default userSlice.reducer;
export const { addUserToStore, clearUserFromStore } = userSlice.actions;
