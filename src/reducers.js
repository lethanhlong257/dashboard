import { combineReducers } from 'redux'
import titleReducer from './components/title/Title.reducer'
import dashboardBarReducer from './components/dashboardBar/DashboardBar.reducer'
import cardHeaderCustomReducer from './components/CardHeaderCustom/CardHeaderCustom.reducer'
import widget from './components/widget/Widget.reducer'

export const AppReducer = combineReducers({
  titleReducer,
  dashboardBarReducer,
  cardHeaderCustomReducer,
  widget
})