import { call, put, takeLatest } from 'redux-saga/effects';
import { safeLoad as parseYaml } from 'js-yaml';
import { LOAD_YAML, LoadYamlAction } from 'actions';

function* loadYamlSaga(action: LoadYamlAction) {
  const {
    type: actionType,
    payload: { url }
  } = action;
  yield put({ type: actionType + '_START' });
  try {
    const res = yield fetch(url);
    const yaml = yield call([res, 'text']);
    const payload = yield call(parseYaml, yaml);
    yield put({ type: actionType + '_SUCCESS', payload });
  } catch (e) {
    yield put({ type: actionType + '_ERROR', error: true, payload: e });
  }
}

export default function* saga() {
  yield takeLatest(LOAD_YAML, loadYamlSaga);
}
