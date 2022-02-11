import {takeEvery, put} from 'redux-saga/effects';
import {
  deleteActionStarted,
  deleteActionTriggered,
  undoActionTriggered,
  undoActionStarted,
  fetchDeleteTriggered,
  fetchDeleteStarted,
} from './actions';
import {Element} from './reducers';

export function* rootSagaWatcher() {
  yield takeEvery(deleteActionTriggered, deleteSagaRunner);
  yield takeEvery(undoActionTriggered, undoSagaRunner);
  yield takeEvery(fetchDeleteTriggered, fetchDeleteRunner);
}

function* deleteSagaRunner({payload}: {payload: Element; type: string}) {
  yield put(deleteActionStarted(payload.id));
}

function* undoSagaRunner({payload}: {payload: Element; type: string}) {
  yield put(undoActionStarted(payload));
}

function* fetchDeleteRunner({payload}: {payload: number}) {
  // there must be real API call with deleting
  yield put(fetchDeleteStarted(payload));
}
