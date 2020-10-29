import { all } from "redux-saga/effects";
import SymbolWatcher from "./symbol";

export default function* rootSaga() {
  yield all([
    SymbolWatcher(),
  ]);
}
