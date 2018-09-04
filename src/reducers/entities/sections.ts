import { SectionShape } from './sections/section';
import { AnyAction } from 'redux';
import { ADD_ENTITIES } from '../../actions';

export interface SectionsShape {
  readonly [id: string]: SectionShape;
}

const sections = (state: SectionsShape = {}, action: AnyAction) => {
  if (action.type === ADD_ENTITIES && action.payload.entity === 'section') {
    return { ...state, ...action.payload.data };
  }
  return state;
};

export default sections;
