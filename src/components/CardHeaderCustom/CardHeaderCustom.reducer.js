import {headerDashBoardConstant} from '../../constants/globalConstant'

const initialState = {
  isExpanding: false,
  widgetType: null
}


export default (state = initialState, { type, payload }) => {
  switch (type) {
    case headerDashBoardConstant.EXPAND_WIDGET:
      return { ...state, isExpanding: true, widgetType: payload}
    case  headerDashBoardConstant.CLOSE_EXPAND_WIDGET:
      return { ...state, isExpanding: false, widgetType: null}
  default:
    return state
  }
}