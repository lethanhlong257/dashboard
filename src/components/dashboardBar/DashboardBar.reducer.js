import {HANDLE_EDIT_MODE, HANDLE_VIEW_MODE} from 'constants/dashboardBarConstant'

const initialState = {
  username: 'longle',
  name: 'LongLe',
  isEditMode: false
}

const EDIT_MODE = true;
const NOT_EDIT_MODE = false;

export default (state = initialState, { type }) => {
  switch (type) {
    case HANDLE_EDIT_MODE:
      return { ...state, isEditMode: EDIT_MODE}
    case  HANDLE_VIEW_MODE:
      return { ...state, isEditMode: NOT_EDIT_MODE}
  default:
    return state
  }
}
