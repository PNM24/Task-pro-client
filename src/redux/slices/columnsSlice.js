import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Fetch all columns (requires boardId in payload, backend does not yet support fetching columns by boardId)
export const fetchColumns = createAsyncThunk(
  'columns/fetchColumns',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;
      const response = await axios.get(`/api/tasks/columns`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Create a new column
export const createColumn = createAsyncThunk(
  'columns/createColumn',
  async (columnData, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;
      const response = await axios.post(`/api/tasks/columns`, columnData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Delete a specific column
export const deleteColumn = createAsyncThunk(
  'columns/deleteColumn',
  async (columnId, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;
      await axios.delete(`/api/tasks/columns/${columnId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return columnId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Update a specific column
export const updateColumn = createAsyncThunk(
  'columns/updateColumn',
  async ({ columnId, newTitle }, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;
      const response = await axios.patch(
        `/api/tasks/columns`,
        { columnId, newTitle },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return { columnId, newTitle: response.data.title };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const columnsSlice = createSlice({
  name: 'columns',
  initialState: {
    items: [], // Array of columns
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchColumns.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchColumns.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchColumns.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(createColumn.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createColumn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(action.payload);
      })
      .addCase(createColumn.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteColumn.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteColumn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.filter(column => column._id !== action.payload);
      })
      .addCase(deleteColumn.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updateColumn.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateColumn.fulfilled, (state, action) => {
        state.isLoading = false;
        const column = state.items.find(column => column._id === action.payload.columnId);
        if (column) {
          column.title = action.payload.newTitle;
        }
      })
      .addCase(updateColumn.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default columnsSlice.reducer;
