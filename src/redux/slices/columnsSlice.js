import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Fetch all columns and filter by boardId
export const fetchColumns = createAsyncThunk(
  'columns/fetchColumns',
  async (boardId, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;
      const response = await axios.get('/tasks', {
        headers: { Authorization: `Bearer ${token}` },
      });

      // Filtrare locală a coloanelor după boardId
      const filteredColumns = response.data.columns.filter(
        column => column.boardId === boardId
      );

      return filteredColumns;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || 'Fetch failed');
    }
  }
);

// Create a new column
export const createColumn = createAsyncThunk(
  'columns/createColumn',
  async ({ boardId, ...columnData }, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;
      const response = await axios.post(
        '/tasks/columns',
        { ...columnData, boardId }, // Trimitem boardId în body
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || 'Creation failed');
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
      await axios.delete(`/tasks/columns/${columnId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return columnId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || 'Deletion failed');
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
        '/tasks/columns',
        { columnId, title: newTitle }, // Trimitem `columnId` și `title` în body
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return { columnId, newTitle: response.data.title };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || 'Update failed');
    }
  }
);

const columnsSlice = createSlice({
  name: 'columns',
  initialState: {
    items: [], // Array de coloane
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      // Fetch columns
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

      // Create column
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

      // Delete column
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

      // Update column
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
