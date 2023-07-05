import { configureStore } from '@reduxjs/toolkit'
import provincesReducer from '../features/provincesSlice'

const store = configureStore({
  reducer: {
    provinces: provincesReducer,
  },
})

export default store
