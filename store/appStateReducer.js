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

  if (action.type === 'SET_STEP') {
    let curState = { ...state };
    let newUser = { ...curState.user };
    let step = action.payload;
    
    newUser.step = step;
    curState.user = newUser;
    state = curState;
    return state;
  }

  return state;
};

export default appStateReducer;
