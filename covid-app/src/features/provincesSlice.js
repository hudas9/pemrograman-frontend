import { createSlice } from '@reduxjs/toolkit'
import provinces from '../utils/constants/province.json'

const provincesSlice = createSlice({
  name: 'provinces',
  initialState: provinces,
  reducers: {
    updateProvinces: (state, action) => {
      state.provinces = action.payload
    },
  },
})

const { updateProvinces } = provincesSlice.actions
const provincesReducer = provincesSlice.reducer

export { updateProvinces }
export default provincesReducer
