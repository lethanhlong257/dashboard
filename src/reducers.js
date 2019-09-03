import { combineReducers } from 'redux'
import titleReducer from './components/title/Title.reducer'
import dashboardBarReducer from './components/dashboardBar/DashboardBar.reducer'

export const AppReducer = combineReducers({
  titleReducer,
  dashboardBarReducer
})