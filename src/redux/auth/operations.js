import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://taskpro-server.onrender.com/taskpro';

const utils = {
  setAuthHeader: (token) => (axios.defaults.headers.common.Authorization = `Bearer ${token}`),
  clearAuthHeader: () => delete axios.defaults.headers.common.Authorization,
};

export const register = createAsyncThunk('auth/register', async (userData, thunkAPI) => {
  try {
    const response = await axios.post('/account/register', userData);
    utils.setAuthHeader(response.data.data.token);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data || 'Registration failed');
  }
});

export const login = createAsyncThunk('auth/login', async (userData, thunkAPI) => {
  try {
    const response = await axios.post('/account/login', userData);
    utils.setAuthHeader(response.data.data.token);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data || 'Login failed');
  }
});

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.delete('/account/logout');
    utils.clearAuthHeader();
    return;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data || 'Logout failed');
  }
});

export const refreshUser = createAsyncThunk('auth/refreshUser', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;
  if (!persistedToken) {
    return thunkAPI.rejectWithValue('No token available');
  }
  try {
    utils.setAuthHeader(persistedToken);
    const response = await axios.get('/account/current');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data || 'Unable to refresh user');
  }
});

export const updateUserProfile = createAsyncThunk('auth/updateProfile', async ({ accountId, ...userData }, thunkAPI) => {
  try {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    if (!token) {
      return thunkAPI.rejectWithValue('Token not available');
    }
    const response = await axios.patch(`/account/${accountId}`, userData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data || 'Profile update failed');
  }
});
