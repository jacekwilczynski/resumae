export interface LoadYamlActionPayload {
  url: string;
}

export interface LoadYamlAction {
  type: 'LOAD_YAML';
  payload: LoadYamlActionPayload;
}

export const LOAD_YAML = 'LOAD_YAML';

export const loadYaml = ({ url }: LoadYamlActionPayload): LoadYamlAction => ({
  type: LOAD_YAML,
  payload: { url }
});
