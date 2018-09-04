import { AnyAction } from 'redux';
import { ADD_ENTITIES } from '../../../actions';

export interface ResumeShape {
  readonly person: string;
  readonly sections: string[];
}

const resume = (state: ResumeShape | undefined, action: AnyAction) => {
  if (action.type === ADD_ENTITIES && action.payload.entity === 'resume') {
    return action.payload;
  }
  return state;
};

export default resume;
