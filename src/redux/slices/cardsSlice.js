import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Fetch all cards for a specific column
export const fetchCards = createAsyncThunk(
  'cards/fetchCards',
  async ({ boardId, columnId }, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;
      const response = await axios.get(
        `/api/cards/boards/${boardId}/columns/${columnId}/cards`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Create a new card in a specific column
export const createCard = createAsyncThunk(
  'cards/createCard',
  async ({ boardId, columnId, ...cardData }, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;
      const response = await axios.post(
        `/api/cards/boards/${boardId}/columns/${columnId}/cards`,
        cardData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Update a specific card
export const updateCard = createAsyncThunk(
  'cards/updateCard',
  async ({ boardId, columnId, cardId, ...updatedCardData }, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;
      const response = await axios.patch(
        `/api/cards/boards/${boardId}/columns/${columnId}/cards/${cardId}`,
        updatedCardData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Delete a specific card
export const deleteCard = createAsyncThunk(
  'cards/deleteCard',
  async ({ boardId, columnId, cardId }, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;
      await axios.delete(
        `/api/cards/boards/${boardId}/columns/${columnId}/cards/${cardId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return cardId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
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
