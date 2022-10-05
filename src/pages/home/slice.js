import { createSlice } from '@reduxjs/toolkit'

export const homeSlice = createSlice({
  name: 'home',
  initialState: {
    value: 0,
    domList: [],
    domId: '',
    domType: '',
    domOptions: {},
    environment:'edit'
  },
  reducers: {
    increment: (state, action) => {
      state.domList.push(action.payload)
      state.domOptions = action.payload
      state.domId = action.payload.id
      state.domType = action.payload.type
    },
    changeOptions: (state, action) => {
      state.domOptions = action.payload
      state.domList.map((item, index) => {
        return item.id === action.payload.id ? state.domList[index] = { ...action.payload } : item;
      })
    },
    changeId: (state, action) => {
      state.domId = action.payload.id
      state.domType = action.payload.type
      state.domOptions = action.payload
    }
  },
})

export const { increment, changeOptions, changeId } = homeSlice.actions

export default homeSlice.reducer