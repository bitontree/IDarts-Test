export const GET_SYMBOL = "GET_SYMBOL";
export const GET_SYMBOL_SUCCESS = "GET_SYMBOL_SUCCESS";
export const GET_SYMBOL_ERROR = "GET_SYMBOL_ERROR";

export const getSymbol = () => ({
  type: GET_SYMBOL
})
export const getSymbolSuccess = (payload) => ({
  type: GET_SYMBOL_SUCCESS,
  payload
})

export const getSymbolError = (error) => ({
  type: GET_SYMBOL_ERROR,
  error
})