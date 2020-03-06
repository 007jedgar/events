import { combineReducers } from 'redux'
import EventReducer from './EventReducer'
import TicketReducer from './TicketReducer'
import AuthReducer from './AuthReducers'

export default combineReducers({
  event: EventReducer,
  ticket: TicketReducer,
  auth: AuthReducer,
})