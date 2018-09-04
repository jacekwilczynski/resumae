import { EntitiesShape } from 'reducers/entities';
import { UiShape } from 'reducers/ui';

export interface StateShape {
  readonly entities: EntitiesShape;
  readonly ui: UiShape;
}
