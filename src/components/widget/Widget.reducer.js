import { CONSTANT } from '../../constants/globalConstant'

const todoListData = [
  {
    id: 1,
    content: 'Lam cai nay',
    isDone: true,
  },
  {
    id: 2,
    content: 'Choi cai kia',
    isDone: false,
  },
  {
    id: 3,
    content: 'Do notthing',
    isDone: true,
  },
  {
    id: 4,
    content: 'Just test for fun',
    isDone: true,
  },
  {
    id: 5,
    content: 'The free job, I will do when free',
    isDone: false,
  },
  {
    id: 6,
    content: 'what the hell is that',
    isDone: false,
  },
  {
    id: 7,
    content: 'haha hihi',
    isDone: true,
  }
]
const initialState = {
  usingContactProperty: ['ID', 'Name', 'Tile'],
  remainningContactProperty: ['Email', 'Phone'],
  todoListData
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CONSTANT.ADD_CONTACT_PROPERTY:
      return {...state, usingContactProperty: payload.usingContactProperty2, remainningContactProperty: payload.remainningContactProperty2}
    default:
      return state
  }
}
