import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import storage from 'redux-persist/lib/storage';

import appStateReducer from './appStateReducer';
import connectReducer from './connectReducer';
import favoritesReducer from './favoritesReducer';
import settingsReducer from './settingsReducer';
import nftsReducer from './nftsReducer';

const persistConfig = {
  key: 'root',
  version: 1,
  storage
};

const persistedSettingsReducer = persistReducer(persistConfig, settingsReducer);
const persistedAppStateReducer = persistReducer(persistConfig, appStateReducer);
const persistedNftsStateReducer = persistReducer(persistConfig, nftsReducer);
const persistedConnectStateReducer = persistReducer(persistConfig, connectReducer);
const persistedFavoritesStateReducer = persistReducer(persistConfig, favoritesReducer);

const rootReducer = combineReducers({
  connect: persistedConnectStateReducer,
  favorites: persistedFavoritesStateReducer,
  settings: persistedSettingsReducer,
  appState: persistedAppStateReducer,
  nftsState: persistedNftsStateReducer
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false, // Disable serializability check for Redux Toolkit
  }),
});

export default store;
export const persistor = persistStore(store);
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;
