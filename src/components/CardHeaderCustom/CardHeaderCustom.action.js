import {headerDashBoardConstant} from '../../constants/globalConstant'

export const expandWidget = (widgetType) => {
  return (dispatch) => {
    dispatch({
      type: headerDashBoardConstant.EXPAND_WIDGET,
      payload: widgetType
    })
  }
}

export const closeExpandWidget = (widgetType) => {
  return (dispatch) => {
    dispatch({
      type: headerDashBoardConstant.CLOSE_EXPAND_WIDGET,
      payload: widgetType
    })
  }
}