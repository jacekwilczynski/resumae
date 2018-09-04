import { AnyAction } from 'redux';
import { ADD_ENTITIES } from '../../../actions';

export enum SubsectionBodyTypes {
  TEXT = 'text',
  LIST = 'list'
}

export interface SubsectionShape {
  readonly post?: string;
  readonly company?: string;
  readonly time?: string;
  readonly location?: string;
  readonly body: {
    readonly type: SubsectionBodyTypes;
    readonly data: string;
  };
}

const subsection = (state: SubsectionShape | undefined, action: AnyAction) => {
  if (action.type === ADD_ENTITIES && action.payload.entity === 'subsection') {
    return action.payload;
  }
  return state;
};

export default subsection;
