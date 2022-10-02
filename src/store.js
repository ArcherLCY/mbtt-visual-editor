import { configureStore } from '@reduxjs/toolkit'
import homeReducer from './pages/home/slice'

export default configureStore({
  reducer: {
    home: homeReducer
  },
})