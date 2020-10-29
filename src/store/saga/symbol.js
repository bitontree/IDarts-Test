import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";
import {
  getSymbolError,
  getSymbolSuccess,
  GET_SYMBOL,
} from "../action/symbol";

function* getSymbols() {
  try {
    const { data } = yield axios
      .get(`/data.json`)
    yield put(getSymbolSuccess(data.results));
  } catch (error) {
    yield put(getSymbolError(error));
  }
}

export default function* SymbolWatcher() {
  yield takeEvery(GET_SYMBOL, getSymbols);
}
