import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { pollReducer } from './Reducers/PollReducer'

const reducers = combineReducers({
  poll: pollReducer
})

const store = configureStore({
  reducer: reducers
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
