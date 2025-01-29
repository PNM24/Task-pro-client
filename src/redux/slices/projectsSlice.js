import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

// Define async thunk for creating a new project
export const createProject = createAsyncThunk(
  'projects/createProject',
  async (projectData, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;
      const response = await axios.post('/tasks/board', projectData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success('Project created successfully');
      return response.data;
    } catch (error) {
      toast.error('Failed to create project');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Define async thunk for fetching user projects
export const fetchUserProjects = createAsyncThunk(
  'projects/fetchUserProjects',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;
      const response = await axios.get('/tasks/board', {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Define async thunk for updating a project
export const updateProject = createAsyncThunk(
  'projects/updateProject',
  async (projectData, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;
      const response = await axios.patch(
        `/tasks/board/${projectData.id}`,
        projectData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      toast.success('Project updated successfully');

      // Set the updated project as selected project
      thunkAPI.dispatch(setSelectedProject(response.data));

      return response.data;
    } catch (error) {
      toast.error('Failed to update project');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Define async thunk for deleting a project
export const deleteProject = createAsyncThunk(
  'projects/deleteProject',
  async (projectId, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;
      await axios.delete(`/tasks/board/${projectId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success('Project deleted successfully');
      return projectId;
    } catch (error) {
      toast.error('Failed to delete project');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Define action to set selected project
export const setSelectedProject = createAsyncThunk(
  'projects/setSelectedProject',
  async (project, thunkAPI) => {
    try {
      return project;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const projectsSlice = createSlice({
  name: 'projects',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    selectedProject: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchUserProjects.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUserProjects.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchUserProjects.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(createProject.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createProject.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(action.payload);
      })
      .addCase(createProject.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updateProject.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateProject.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.items.findIndex(
          project => project._id === action.payload._id
        );
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(updateProject.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteProject.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteProject.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.filter(
          project => project._id !== action.payload
        );
      })
      .addCase(deleteProject.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(setSelectedProject.fulfilled, (state, action) => {
        state.selectedProject = action.payload;
      });
  },
});

export default projectsSlice.reducer;
