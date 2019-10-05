import { CONSTANT } from '../../constants/globalConstant'

const initialState = {
  usingContactProperty: ['ID', 'Name', 'Tile'],
  remainningContactProperty: ['Email', 'Phone']
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CONSTANT.ADD_CONTACT_PROPERTY:
      return {...state, usingContactProperty: payload.usingContactProperty2, remainningContactProperty: payload.remainningContactProperty2}
    default:
      return state
  }
}
