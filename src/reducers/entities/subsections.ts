import { SubsectionShape } from './subsections/subsection';
import { AnyAction } from 'redux';
import { ADD_ENTITIES } from '../../actions';

export interface SubsectionsShape {
  readonly [id: string]: SubsectionShape;
}

const subsections = (state: SubsectionsShape = {}, action: AnyAction) => {
  if (action.type === ADD_ENTITIES && action.payload.entity === 'subsection') {
    return { ...state, ...action.payload.data };
  }
  return state;
};

export default subsections;
