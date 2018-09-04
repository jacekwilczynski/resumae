import entities, { EntitiesShape } from 'reducers/entities';
import ui, { UiShape } from 'reducers/ui';
import { combineReducers } from 'redux';

export interface StateShape {
  readonly entities: EntitiesShape;
  readonly ui: UiShape;
}

export default combineReducers({ entities, ui });
