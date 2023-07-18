const INIT_STATE = {
  triedReconnect: false,
  user: null,
};

const appStateReducer = (state = INIT_STATE, action) => {
  if (action.type === 'SET_TRIED_RECONNECT') {
    return {
      ...state,
      triedReconnect: action.payload,
    };
  }

  if (action.type === 'SET_USER') {
    return {
      ...state,
      user: action.payload,
    };
  }

  return state;
};

export default appStateReducer;
