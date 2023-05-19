const initialState = {
  tokens: [],
  pools: [],
}

const tokensFavReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE_TOKEN':
      if (state.tokens.includes(action.payload)) return state
      return { ...state, tokens: [...state.tokens, action.payload] }
    case 'ADD_FAVORITE_POOL':
      if (state.tokens.includes(action.payload)) return state
      return { ...state, pools: [...state.pools, action.payload] }
    case 'REMOVE_FAVORITE_TOKEN':
      return {
        ...state,
        tokens: state.tokens.filter(fav => fav !== action.payload),
      }
    case 'REMOVE_FAVORITE_POOL':
      return {
        ...state,
        pools: state.pools.filter(fav => fav !== action.payload),
      }
    default:
      return state
  }
}

export default tokensFavReducer
