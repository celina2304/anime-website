import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import animeReducer from './animeSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    anime: animeReducer,
  },
})