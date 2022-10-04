import { createSlice } from '@reduxjs/toolkit'

export const homeSlice = createSlice({
  name: 'home',
  initialState: {
    value: 0,
    domList: [],
    domId: '',
    domType: '',
    // 就是组件中的options
    domOptions: {}
  },
  reducers: {
    // 将新增的action的信息转移到 state 当中
    increment: (state, action) => {
      // 将action push到 domList数组当中
      state.domList.push(action.payload)
      //options 就是 payload,所有的属性都会挂载到 options当中
      state.domOptions = action.payload
      state.domId = action.payload.id
      state.domType = action.payload.type
    },
    // 将用户修改或增加的属性更新到 dolist 中对应的元素当中
    changeOptions: (state, action) => {
      console.log(action.payload);
      // state.domOptions = action.payload
      state.domList.map((item, index) => {
        console.log(state.domList[index]);
        return item.id === action.payload.id ? state.domList[index] = { ...action.payload } : item = item;
      })
      console.log(state.domList[0]);
    },
    // 将新增的action的信息转移到 state 当中
    changeId: (state, action) => {
      console.log(action.payload);
      state.domId = action.payload.id
      state.domOptions = action.payload
      state.domType = action.payload.type
    }
  },
})

export const { increment, changeOptions, changeId } = homeSlice.actions

export default homeSlice.reducer