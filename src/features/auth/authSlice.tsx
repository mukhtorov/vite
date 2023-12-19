import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export type state = {
  brandName?: string;
  name?: string;
  token?: string | undefined | null;
  email?: string;
};

const initialState: state = {
  brandName: "Webbrain",
  name: "Webbrain Academy",
  email: "webbrain.academy@gmail.com",
  token: null,
};

const signin = createAsyncThunk("user/signin", async () => {
  // const response = await fetch("/", {
  //   body: JSON.stringify({ login, password }),
  // });
  // return await response.json();

  return initialState;
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: () => {
      return {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signin.pending, () => {});
  },
});

// export type AuthState = ReturnType<typeof authSlice.getInitialState>;
export { signin };
export const { logout } = authSlice.actions;
export default authSlice.reducer;
