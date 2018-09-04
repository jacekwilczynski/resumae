import { PersonShape } from './people/person';
import { AnyAction } from 'redux';
import { ADD_ENTITIES } from '../../actions';

export interface PeopleShape {
  readonly [id: string]: PersonShape;
}

const people = (state: PeopleShape = {}, action: AnyAction) => {
  if (action.type === ADD_ENTITIES && action.payload.entity === 'person') {
    return { ...state, ...action.payload.data };
  }
  return state;
};

export default people;
