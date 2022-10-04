import { configureStore } from '@reduxjs/toolkit'
import contentReducer from './pages/home/content/slice'
import homeReducer from './pages/home/slice'

export default configureStore({
  reducer: {
    content: contentReducer,
    home: homeReducer
  },
})