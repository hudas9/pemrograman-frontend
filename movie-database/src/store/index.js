import { configureStore } from '@reduxjs/toolkit'
import movieReducer from '../features/moviesSlice/index.js'

const store = configureStore({
  reducer: {
    movies: movieReducer,
  },
})

export default store
