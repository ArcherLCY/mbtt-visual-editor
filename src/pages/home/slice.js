import { createSlice } from '@reduxjs/toolkit'

export const homeSlice = createSlice({
  name: 'home',
  initialState: {
    value: 0,
    domList: [],
    domId: '',
    domType: '',
<<<<<<< HEAD
    domOptions: {}
=======
    domOptions: {},
    environment:'edit'
>>>>>>> d13daf9a5aa2c24a0a69e64e97412054689551af
  },
  reducers: {
    increment: (state, action) => {
      state.domList.push(action.payload)
      state.domOptions = action.payload
      state.domId = action.payload.id
      state.domType = action.payload.type
    },
    changeOptions: (state, action) => {
<<<<<<< HEAD
      state.domOptions = action.payload
      state.domList.map((item, index) => {
        return item.id === action.payload.id ? state.domList[index] = { ...action.payload } : item;
      })
    },
    changeId: (state, action) => {
      state.domId = action.payload.id
      state.domType = action.payload.type
      state.domOptions = action.payload
=======
      console.log(action.payload);
      // state.domOptions = action.payload
      state.domList.map((item, index) => {
        console.log(state.domList[index]);
        return item.id === action.payload.id ? state.domList[index] = { ...action.payload } : item = item;
      })
      console.log(state.domList[0]);
    },
    changeId: (state, action) => {
      console.log(action.payload);
      state.domId = action.payload.id
      state.domOptions = action.payload
      state.domType = action.payload.type
>>>>>>> d13daf9a5aa2c24a0a69e64e97412054689551af
    }
  },
})

export const { increment, changeOptions, changeId } = homeSlice.actions

export default homeSlice.reducer