import { AnyAction } from 'redux';
import { ADD_ENTITIES } from '../../../actions';

export interface PersonShape {
  readonly name: string;
  readonly contactInfo: string[];
}

const person = (state: PersonShape | undefined, action: AnyAction) => {
  if (action.type === ADD_ENTITIES && action.payload.entity === 'person') {
    return action.payload;
  }
  return state;
};

export default person;
