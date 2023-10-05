import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TokensFavState } from '../types/interfaces';

const INIT_STATE: TokensFavState = {
  tokens: [],
  pools: [],
};

const favoritesReducer = createSlice({
  name: "favorites",
  initialState: INIT_STATE,
  reducers: {
    setAddFavoriteToken: (state, action: PayloadAction<{ token: string }>) => {
      if (state.tokens.includes(action.payload.token)) return state;
      return { ...state, tokens: [...state.tokens, action.payload.token] };
    },
    setFavoritePool: (state, action: PayloadAction<{ pool: string }>) => {
      if (state.tokens.includes(action.payload.pool)) return state;
      return { ...state, pools: [...state.pools, action.payload.pool] };
    },
    setRemoveFavoriteToken: (state, action: PayloadAction<{ token: string }>) => {
      return {
        ...state,
        tokens: state.tokens.filter(fav => fav !== action.payload.token),
      };
    },
    setRemoveFavoritePool: (state, action: PayloadAction<{ pool: string }>) => {
      return {
        ...state,
        pools: state.pools.filter(fav => fav !== action.payload.pool),
      };
    }
  }
});

export default favoritesReducer.reducer;
export const {
  setAddFavoriteToken,
  setRemoveFavoriteToken,
  setFavoritePool,
  setRemoveFavoritePool
} = favoritesReducer.actions;
