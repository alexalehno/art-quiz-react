import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { gameSlice } from './gameSlice';
import { apiSlice } from './apiSlice';
import { settingsSlice } from './settingsSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const rootReducer = combineReducers({
  game: gameSlice.reducer,
  settings: settingsSlice.reducer,
  [apiSlice.reducerPath]: apiSlice.reducer
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['game', 'settings']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(apiSlice.middleware),
});

export const persistor = persistStore(store);