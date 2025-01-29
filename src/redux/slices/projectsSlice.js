import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

// Fetch all user projects (boards)
export const fetchUserProjects = createAsyncThunk(
  'projects/fetchUserProjects',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;
      const response = await axios.get('/tasks', {
        headers: { Authorization: `Bearer ${token}` },
      });

      console.log("Fetched projects response:", response.data); // Debugging

      // Filtrare doar pentru board-uri (proiecte)
      const projects = response.data.boards || []; // Evită 'undefined'
      return projects;
    } catch (error) {
      console.error("Fetch projects error:", error.response?.data || error.message);
      return thunkAPI.rejectWithValue(error.response?.data || 'Fetch failed');
    }
  }
);

// Create a new project (board)
export const createProject = createAsyncThunk(
  'projects/createProject',
  async (projectData, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;
      const response = await axios.post('/tasks/board', projectData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      console.log("Created project response:", response.data); // Debugging

      toast.success('Project created successfully');
      return response.data.data; // Returnăm doar `data`
    } catch (error) {
      console.error("Create project error:", error.response?.data || error.message);
      toast.error('Failed to create project');
      return thunkAPI.rejectWithValue(error.response?.data || 'Creation failed');
    }
  }
);

// Update a specific project (board)
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

      console.log("Updated project response:", response.data); // Debugging

      toast.success('Project updated successfully');

      thunkAPI.dispatch(setSelectedProject(response.data.data));

      return response.data.data; // Returnăm doar `data`
    } catch (error) {
      console.error("Update project error:", error.response?.data || error.message);
      toast.error('Failed to update project');
      return thunkAPI.rejectWithValue(error.response?.data || 'Update failed');
    }
  }
);

// Delete a specific project (board)
export const deleteProject = createAsyncThunk(
  'projects/deleteProject',
  async (projectId, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;
      await axios.delete(`/tasks/board/${projectId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      console.log("Deleted project ID:", projectId); // Debugging

      toast.success('Project deleted successfully');
      return projectId; // Returnăm doar `projectId`
    } catch (error) {
      console.error("Delete project error:", error.response?.data || error.message);
      toast.error('Failed to delete project');
      return thunkAPI.rejectWithValue(error.response?.data || 'Deletion failed');
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
    items: [], // Array de proiecte
    isLoading: false,
    error: null,
    selectedProject: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      // Fetch projects
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

      // Create project
      .addCase(createProject.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createProject.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload) {
          state.items.push(action.payload);
        }
      })
      .addCase(createProject.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Update project
      .addCase(updateProject.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateProject.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.items.findIndex(
          project => project._id === action.payload?._id
        );
        if (index !== -1 && action.payload) {
          state.items[index] = action.payload;
        }
      })
      .addCase(updateProject.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Delete project
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

      // Set selected project
      .addCase(setSelectedProject.fulfilled, (state, action) => {
        state.selectedProject = action.payload;
      });
  },
});

export default projectsSlice.reducer;
