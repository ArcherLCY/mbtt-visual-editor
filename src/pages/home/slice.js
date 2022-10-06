import { createSlice } from '@reduxjs/toolkit'

export const homeSlice = createSlice({
  name: 'home',
  initialState: {
    value: 0,
    domList: [],
    domId: '',
    domType: '',
    domOptions: {},
    isEdit: true,
    contentSize: { width: 800, height: 1000}, //中心画布的大小
  },
  reducers: {   
    // 增加一个组件
    increment: (state, action) => {
      state.domList.push(action.payload)
      state.domOptions = action.payload
      state.domId = action.payload.id
      state.domType = action.payload.type
    },

    // 改变高亮聚焦的dom
    changeOptions: (state, action) => {
      state.domList.map((item, index) => {
        return item.id === action.payload.id ? state.domList[index] = { ...action.payload } : item = item;
      })
    },

    // 改变聚焦的id
    changeId: (state, action) => {
      state.domId = action.payload.id
      state.domOptions = action.payload
      state.domType = action.payload.type
    },

    // 改变编辑状态
    changeEditStatus: (state, action) => {
      state.isEdit = action.payload
    },

    // 改变中心画布大小
    changeContentSize: (state, action) => {
      state.contentSize = action.payload
    },

    // 清空domList
    clearDomList: (state, action) => {
      state.domList = []
    },

    // 删除选中的dom
    deleteDom: (state, action) => {
      console.log(state.domList);
      state.domList.filter(item => {
        return item.id !== state.domId
      })
      console.log(state.domList);
    },
  },
})

export const { increment, changeOptions, changeId, changeEditStatus, changeContentSize, clearDomList, deleteDom  } = homeSlice.actions

export default homeSlice.reducer