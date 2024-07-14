// Uses reducer to configure clientside of store,
// reducer uses configs from redux
import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'

export const store = configureStore({
  reducer: {
    user : userReducer
  },
})
