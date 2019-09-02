import {GET_TITLE_DASHBOARD} from 'constants/Title.constant.js'

const initialState = {
  titleDashboard: "Title Dashboard"
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case GET_TITLE_DASHBOARD:
    return { ...state, ...payload }

  default:
    return state
  }
}
