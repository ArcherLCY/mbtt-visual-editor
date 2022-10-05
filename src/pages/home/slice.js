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

      console.log(action.payload);

      state.domOptions = action.payload
      state.domList.map((item, index) => {
        return item.id === action.payload.id ? state.domList[index] = { ...action.payload } : item;
      })
    },
    changeId: (state, action) => {
      state.domId = action.payload.id
      state.domType = action.payload.type
      state.domOptions = action.payload

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

    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, changeOptions,changeId } = homeSlice.actions


export default homeSlice.reducer

