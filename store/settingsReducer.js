const initialState = {
  slippage: 0.5,
  txDeadlines: 5,
};

const settingsReducer = (state = initialState, action) => {
  if (action.type === 'SET_SLIPPAGE') {
    return {
      ...state,
      slippage: action.slippage,
    };
  }
  return state;
};

export default settingsReducer;
