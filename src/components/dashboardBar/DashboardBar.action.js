import {HANDLE_EDIT_MODE, HANDLE_VIEW_MODE} from 'constants/dashboardBarConstant'

export const handleEditMode = (isEdit) => {
  return (dispatch) => {
    if (isEdit) {
      dispatch({
        type: HANDLE_EDIT_MODE
      })
    } else {
      dispatch({
        type: HANDLE_VIEW_MODE
      })
    }
  }
}