const INIT_STATE = {
  nfts: [],
  nftsCopy: [],
  newArrivals: []
};

const nftsReducer = (state = INIT_STATE, action) => {
  if (action.type === 'SET_NFTS') {
    return {
      ...state,
      nfts: action.payload,
      nftsCopy: action.payload
    };
  }

  if (action.type === 'SET_NFTS_COPY') {
    return {
      ...state,
      nftsCopy: action.payload
    };
  }

  if (action.type === 'SET_NEW_ARRIVALS') {
    return {
      ...state,
      newArrivals: action.payload
    };
  }

  return state;
};

export default nftsReducer;
