import loadYamlSaga from 'sagas/loadYamlSaga';

export default function* saga() {
  yield loadYamlSaga();
}
