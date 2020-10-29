import { combineReducers } from "redux";
import SymbolReducer from "./symbol";

const rootReducer = combineReducers({
  symbols: SymbolReducer
});

export default rootReducer;
