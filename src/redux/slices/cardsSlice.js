import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Fetch all tasks (cards) and filter by boardId & columnId
export const fetchCards = createAsyncThunk(
  'cards/fetchCards',
  async ({ boardId, columnId }, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;
      const response = await axios.get('/tasks', {
        headers: { Authorization: `Bearer ${token}` },
      });

      // Filtrare locală pentru boardId și columnId
      const filteredCards = response.data.tasks.filter(
        task => task.boardId === boardId && task.columnId === columnId
      );

      return filteredCards;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || 'Fetch failed');
    }
  }
);

// Create a new task (card) in a specific column
export const createCard = createAsyncThunk(
  'cards/createCard',
  async ({ boardId, columnId, ...cardData }, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;
      const response = await axios.post(
        '/tasks/tasks',
        { ...cardData, boardId, columnId }, // Trimitem boardId și columnId în body
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

// Update a specific task (card)
export const updateCard = createAsyncThunk(
  'cards/updateCard',
  async ({ cardId, ...updatedCardData }, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;
      const response = await axios.patch(
        '/tasks/tasks',
        { taskId: cardId, ...updatedCardData }, // Trimitem taskId în body
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || 'Update failed');
    }
  }
);

// Delete a specific task (card)
export const deleteCard = createAsyncThunk(
  'cards/deleteCard',
  async ({ cardId }, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;
      await axios.delete(`/tasks/tasks/${cardId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return cardId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || 'Deletion failed');
    }
  }
);

const cardsSlice = createSlice({
  name: 'cards',
  initialState: {
    items: [], // Array of cards
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      // Fetch cards
      .addCase(fetchCards.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCards.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchCards.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Create card
      .addCase(createCard.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createCard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(action.payload);
      })
      .addCase(createCard.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Update card
      .addCase(updateCard.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateCard.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.items.findIndex(
          card => card._id === action.payload._id
        );
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(updateCard.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Delete card
      .addCase(deleteCard.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteCard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.filter(card => card._id !== action.payload);
      })
      .addCase(deleteCard.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default cardsSlice.reducer;
