export const LOAD_YAML = 'LOAD_YAML';
export const LOAD_YAML_SUCCESS = 'LOAD_YAML_SUCCESS';
export const LOAD_YAML_START = 'LOAD_YAML_START';
export const LOAD_YAML_ERROR = 'LOAD_YAML_ERROR';

export interface LoadYamlActionPayload {
  url: string;
}
export interface LoadYamlAction {
  type: 'LOAD_YAML';
  payload: LoadYamlActionPayload;
}
export const loadYaml = ({ url }: LoadYamlActionPayload): LoadYamlAction => ({
  type: LOAD_YAML,
  payload: { url }
});

export interface LoadYamlStartAction {
  type: 'LOAD_YAML_START';
}
export const loadYamlStart = (): LoadYamlStartAction => ({
  type: LOAD_YAML_START
});

export interface LoadYamlSuccessAction {
  type: 'LOAD_YAML_SUCCESS';
  payload: object;
}
export const loadYamlSuccess = (payload: object): LoadYamlSuccessAction => ({
  type: LOAD_YAML_SUCCESS,
  payload
});

export interface LoadYamlErrorAction {
  type: 'LOAD_YAML_ERROR';
  error: true;
  payload: Error;
}
export const loadYamlError = (e: Error) => ({
  type: LOAD_YAML_ERROR,
  error: true,
  payload: e
});

export const ADD_ENTITIES = 'ADD_ENTITIES';

export interface AddEntitiesAction {
  type: 'ADD_ENTITIES';
  payload: AddEntitiesActionPayload;
}
export interface AddEntitiesActionPayload {
  entity: string;
  data: any;
}
export const addEntities = ({
  entity,
  data
}: AddEntitiesActionPayload): AddEntitiesAction => ({
  type: ADD_ENTITIES,
  payload: {
    entity,
    data
  }
});

export const SET_ACTIVE_RESUME = 'SET_ACTIVE_RESUME';

export interface SetActiveResumeAction {
  type: 'SET_ACTIVE_RESUME';
  payload: SetActiveResumeActionPayload;
}
export interface SetActiveResumeActionPayload {
  id: string;
}
export const setActiveResume = ({
  id
}: SetActiveResumeActionPayload): SetActiveResumeAction => ({
  type: SET_ACTIVE_RESUME,
  payload: { id }
});
