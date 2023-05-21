import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    data: {
      isLoggedIn: false,
    },
    loading: false,
    error: "",
  },
  reducers: {
    loadingLoginData(state) {
      state.loading = true;
    },
    updateLoginData(state, action) {
      state.loading = false;
      state.data = action.payload;
    },
    errorLoginData(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    logoutData(state) {
      state.loading = false;
      state.data = {
        isLoggedIn: false,
      };
      state.error = "";
    },
  },
});

export const loginActions = loginSlice.actions;
export default loginSlice.reducer;
