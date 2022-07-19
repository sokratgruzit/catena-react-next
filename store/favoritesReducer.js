const initialState = {};

const tokensFavReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return {
        ...state,
        shit: action.payload,
      };
    case 'REMOVE_FAVORITE':
      return {
        ...state,
        favorite: action.payload,
      };
    default:
      return state;
  }
};

export default tokensFavReducer;
