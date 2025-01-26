import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/slice';
import projectsReducer from './slices/projectsSlice';
import columnsReducer from './slices/columnsSlice';

import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'theme'],
};

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    projects: projectsReducer,
    columns: columnsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);

export { store, persistor };
