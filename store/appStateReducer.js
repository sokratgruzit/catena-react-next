const INIT_STATE = {
  triedReconnect: false,
};

const appStateReducer = (state = INIT_STATE, action) => {
  if (action.type === "SET_TRIED_RECONNECT") {
    return {
      ...state,
      triedReconnect: action.payload,
    };
  }

  return state;
};

export default appStateReducer;
