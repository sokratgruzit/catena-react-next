const initialState = {
  slippage: 0.5,
  txDeadlines: 5,
  locales: [],
  activeLang: 'en',
  activeColorMode: 'white'
};

const settingsReducer = (state = initialState, action) => {
  if (action.type === 'SET_SLIPPAGE') {
    return {
      ...state,
      slippage: action.slippage,
    };
  }

  if (action.type === 'SET_LOCALES') {
    return {
      ...state,
      locales: action.locales,
    };
  }

  if (action.type === 'SET_ACTIVE_LANG') {
    return {
      ...state,
      activeLang: action.activeLang,
    };
  }

  if (action.type === 'SET_ACTIVE_COLOR_MODE') {
    return {
      ...state,
      activeColorMode: action.activeColorMode,
    };
  }

  return state;
};

export default settingsReducer;
