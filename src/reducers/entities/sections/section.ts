import { AnyAction } from 'redux';
import { ADD_ENTITIES } from '../../../actions';

export enum SectionBodyTypes {
  SUBSECTIONS = 'subsections',
  LIST = 'list',
  TEXT = 'text'
}

export interface SectionShape {
  readonly id: string;
  readonly title: string;
  readonly body: {
    readonly type: SectionBodyTypes;
    readonly data: string;
  };
}

const section = (state: SectionShape | undefined, action: AnyAction) => {
  if (action.type === ADD_ENTITIES && action.payload.entity === 'section') {
    return action.payload;
  }
  return state;
};

export default section;
