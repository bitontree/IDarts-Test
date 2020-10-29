import {
  GET_SYMBOL,
  GET_SYMBOL_ERROR,
  GET_SYMBOL_SUCCESS
} from "../action/symbol";

const INITIAL_STATE = {
  loading: false,
  symbol: [],
  error: ''
};

const SymbolReducer = (state = INITIAL_STATE, { payload, error, ...action }) => {
  switch (action.type) {
    case GET_SYMBOL:
      return {
        ...state,
        loading: true,
      };
    case GET_SYMBOL_SUCCESS:
      return {
        ...state,
        loading: false,
        symbol: payload
      };
    case GET_SYMBOL_ERROR:
      return {
        ...state,
        error,
        loading: true,
      };

    default:
      return state;
  }
};

export default SymbolReducer;
