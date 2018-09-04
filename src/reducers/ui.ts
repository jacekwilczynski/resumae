import { AnyAction } from 'redux';
import { SET_ACTIVE_RESUME } from 'actions';

export interface UiShape {
  activeResume: string | null;
}

const initialState = { activeResume: null };

const ui = (state: UiShape = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_ACTIVE_RESUME:
      return { activeResume: action.payload.id };
    default:
      return state;
  }
};

export default ui;
