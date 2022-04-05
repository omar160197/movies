const INITIAL_STATE = {
  counter: 0,
  item: {},
  items: [],
  pageNumber:1
};

export function cartReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_ITEMS":
      return {
        ...state,
        items: action.payload,
      };
      case "SET_PAGE_NUMBER":
        return {
          ...state,
          pageNumber: action.payload,
        };  
    case "ADD_ITEM":
      return {
        ...state,
        item: action.payload,
      };
    case "SET_COUNTER":
      return {
        ...state,
        counter: action.payload,
      };
    default:
      return state;
  }
}
