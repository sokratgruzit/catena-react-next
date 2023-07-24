const initialState = {
  slippage: 0.5,
  txDeadlines: 5,
  locales: []
};

const settingsReducer = (state = initialState, action) => {
  if (action.type === 'SET_SLIPPAGE') {
    return {
      ...state,
      slippage: action.slippage,
    };
  }

  if (action.type === 'SET_LOCALES') {
    console.log(action)
    return {
      ...state,
      locales: action.locales,
    };
  }

  return state;
};

export default settingsReducer;
