import { put, all } from 'redux-saga/effects'
import { todos } from '../data/todos'

function* fetchWeather() {
  yield put({ type: 'TODOS_FETCHED', payload: todos })
}

export default function* rootSaga() {
  yield all([
    fetchWeather(),
  ]);
}