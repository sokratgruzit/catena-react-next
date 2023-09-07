import { configureStore, getDefaultMiddleware, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';

import appStateReducer from './appStateReducer';
import connectReducer from './connectReducer';
import favoritesReducer from './favoritesReducer';
import settingsReducer from './settingsReducer';
import nftsReducer from './nftsReducer';

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
};

const rootReducer = combineReducers({
  connect: persistReducer(persistConfig, connectReducer),
  favorites: persistReducer(persistConfig, favoritesReducer),
  settings: persistReducer(persistConfig, settingsReducer),
  appState: appStateReducer,
  nftsState: persistReducer(persistConfig, nftsReducer)
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;

export const persistor = persistStore(store);
