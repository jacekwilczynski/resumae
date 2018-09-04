import { PersonShape } from './people/person';

export interface PeopleShape {
  readonly [id: string]: PersonShape;
}
