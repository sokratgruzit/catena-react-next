import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NftState } from '../types/interfaces';

const INIT_STATE: NftState = {
  nfts: [],
  nftsCopy: [],
  newArrivals: [],
};

const nftsReducer = createSlice({
  name: "nftsState",
  initialState: INIT_STATE,
  reducers: {
    setNfts: (state, action: PayloadAction<{ nfts: any, nftsCopy: any }>) => {
      return {
        ...state,
        nfts: action.payload.nfts,
        nftsCopy: action.payload.nftsCopy
      };
    },
    setNftsCopy: (state, action: PayloadAction<{ nftsCopy: any }>) => {
      return {
        ...state,
        nftsCopy: action.payload.nftsCopy
      };
    },
    setNewArrivals: (state, action: PayloadAction<{ newArrivals: any }>) => {
      return {
        ...state,
        newArrivals: action.payload.newArrivals
      };
    }
  }
});

export default nftsReducer.reducer;
export const {
  setNewArrivals,
  setNfts,
  setNftsCopy
} = nftsReducer.actions;
