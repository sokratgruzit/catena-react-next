import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from '../types/interfaces';

const INIT_STATE: AppState = {
  triedReconnect: false,
  user: null,
  routerQuery: {},
};

const appStateReducer = createSlice({
  name: "appState",
  initialState: INIT_STATE,
  reducers: {
    setTriedReconnect: (state, action: PayloadAction<{ triedReconnect: boolean }>) => {
      return {
        ...state,
        triedReconnect: action.payload.triedReconnect
      };
    },
    setUser: (state, action: PayloadAction<{ user: any }>) => {
      return {
        ...state,
        user: action.payload.user
      };
    },
    setStep: (state, action: PayloadAction<{ step: number }>) => {
      const curState = { ...state };
      const newUser = { ...curState.user };
      const step = action.payload;

      newUser.step = step;
      curState.user = newUser;
      return curState;
    },
    setRouterQuery: (state, action: PayloadAction<{ routerQuery: any }>) => {
      return {
        ...state,
        routerQuery: action.payload.routerQuery
      };
    }
  }
})

export default appStateReducer.reducer;
export const {
  setTriedReconnect,
  setRouterQuery,
  setStep,
  setUser
} = appStateReducer.actions;
