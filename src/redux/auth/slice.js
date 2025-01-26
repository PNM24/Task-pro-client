import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, refreshUser, updateUserProfile } from './operations';

const initialState = {
  isLoading: false,
  error: null,
  user: {
    name: null,
    email: null,
    avatarUrl: null,
  },
  token: null,
  isLoggedIn: false,
  theme: 'light',
};

const utils = {
  handlePending: state => {
    state.isLoading = true;
  },
  handleRejected: (state, action) => {
    state.isLoading = false;
    state.error =
      action.payload?.response?.data?.message || 'Internal server error';
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      // *Register
      .addCase(register.pending, utils.handlePending)
      .addCase(register.rejected, utils.handleRejected)
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.user = {
          name: action.payload.data.user.name,
          email: action.payload.data.user.email,
        };
        state.token = action.payload.data.token;
        state.isLoggedIn = true;
      })

      // *Login
      .addCase(login.pending, utils.handlePending)
      .addCase(login.rejected, utils.handleRejected)
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.user = {
          name: action.payload.data.user.name,
          email: action.payload.data.user.email,
          avatarUrl: action.payload.data.user.avatarUrl,
        };
        state.token = action.payload.data.token;
        state.isLoggedIn = true;
      })

      // *Logout
      .addCase(logout.pending, utils.handlePending)
      .addCase(logout.rejected, utils.handleRejected)
      .addCase(logout.fulfilled, state => {
        state.isLoading = false;
        state.error = null;
        state.user = {
          name: null,
          email: null,
          avatarUrl: null,
        };
        state.token = null;
        state.isLoggedIn = false;
      })

      // *Refresh User
      .addCase(refreshUser.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = {
          name: action.payload.data.user.name,
          email: action.payload.data.user.email,
          avatarUrl: action.payload.data.user.avatarUrl,
        };
        state.isLoggedIn = true;
        state.error = null;
      })

      // *Update User
      .addCase(updateUserProfile.pending, utils.handlePending)
      .addCase(updateUserProfile.rejected, utils.handleRejected)
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.user = {
          ...state.user,
          ...action.payload.data.user
        };
      });
  },
});

export const { setTheme } = authSlice.actions;
export const authReducer = authSlice.reducer;
