import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SettingsState, Locale } from '../types/interfaces';

const INIT_STATE: SettingsState = {
  slippage: 0.5,
  txDeadlines: 5,
  locales: [],
  activeLang: 'en',
  activeColorMode: 'white',
  microschemeArray: [],
};

const settingsReducer = createSlice({
  name: "settings",
  initialState: INIT_STATE,
  reducers: {
    setSlippage: (state, action: PayloadAction<{ slippage: number }>) => {
      return {
        ...state,
        slippage: action.payload.slippage
      };
    },
    setLocales: (state, action: PayloadAction<{ locales: Locale[] }>) => {
      return {
        ...state,
        locales: action.payload.locales
      };
    },
    setActiveLang: (state, action: PayloadAction<{ activeLang: string }>) => {
      return {
        ...state,
        activeLang: action.payload.activeLang
      };
    },
    setActiveColorMode: (state, action: PayloadAction<{ activeColorMode: string }>) => {
      return {
        ...state,
        activeColorMode: action.payload.activeColorMode
      };
    },
    setMicroshemeArray: (state, action: PayloadAction<{ microshemeArray: number[] }>) => {
      return {
        ...state,
        microschemeArray: action.payload.microshemeArray
      };
    }
  }
});

export default settingsReducer.reducer;
export const {
  setSlippage,
  setLocales,
  setActiveLang,
  setActiveColorMode,
  setMicroshemeArray
} = settingsReducer.actions;