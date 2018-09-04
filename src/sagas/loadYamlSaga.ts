import {
  LOAD_YAML,
  LoadYamlAction,
  loadYamlError,
  loadYamlStart,
  loadYamlSuccess
} from '../actions';
import { call, put, take } from 'redux-saga/effects';
import { safeLoad as parseYaml } from 'js-yaml';
import addIds from '../utils/addIds';
import normalizeYamlData from '../utils/normalizeYamlData';

export default function* loadYamlSaga() {
  while (true) {
    const action: LoadYamlAction = yield take(LOAD_YAML);
    const { url } = action.payload;
    yield put(loadYamlStart());
    try {
      const res = yield fetch(url);
      const yaml = yield call([res, 'text']);
      const payload = yield call(parseYaml, yaml);
      const withIds = yield call(addIds, payload);
      const normalized = yield call(normalizeYamlData, withIds);
      yield put(loadYamlSuccess(normalized));
    } catch (e) {
      yield put(loadYamlError(e));
    }
  }
}
