import { ResumeShape } from './resumes/resume';
import { AnyAction } from 'redux';
import { ADD_ENTITIES } from '../../actions';

export interface ResumesShape {
  readonly [id: string]: ResumeShape;
}

const resumes = (state: ResumesShape = {}, action: AnyAction) => {
  if (action.type === ADD_ENTITIES && action.payload.entity === 'resume') {
    return { ...state, ...action.payload.data };
  }
  return state;
};

export default resumes;
