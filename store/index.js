import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import connectReducer from "./connectReducer";
import favoritesReducer from "./favoritesReducer";
import settingsReducer from "./settingsReducer";
import appStateReducer from "./appStateReducer";

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2,
};

const rootReducer = combineReducers({
  connect: persistReducer(persistConfig, connectReducer),
  favorites: persistReducer(persistConfig, favoritesReducer),
  settings: persistReducer(persistConfig, settingsReducer),
  appState: appStateReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;

export const persistor = persistStore(store);
