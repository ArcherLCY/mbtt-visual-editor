import { createSlice } from '@reduxjs/toolkit'

export const homeSlice = createSlice({
  name: 'home',
  initialState: {
    tab: 0,
    domList: [],
    domId: '',
    domType: '',
    domOptions: {},
    isEdit: true,
    contentSize: { width: 800, height: 1000}, //中心画布的大小
  },
    // 将新增的action的信息转移到 state 当中
  reducers: {   
    // 增加一个组件
    increment: (state, action) => {
      // 将action push到 domList数组当中
      
      state.domList.push(action.payload)
      //options 就是 payload,所有的属性都会挂载到 options当中
      state.domOptions = action.payload
      state.domId = action.payload.id
      state.domType = action.payload.type
      
    },
    // 将用户修改或增加的属性更新到 dolist 中对应的元素当中

    // 改变高亮聚焦的dom
    changeOptions: (state, action) => {
      state.domList.map((item, index) => {
        return item.id === action.payload.id ? state.domList[index] = { ...action.payload } : item = item;
      })
    },
    // 将新增的action的信息转移到 state 当中

    // 改变聚焦的id
    changeId: (state, action) => {
      state.domId = action.payload.id
      state.domOptions = action.payload
      state.domType = action.payload.type
    },

    // 改变编辑状态
    changeEditStatus: (state, action) => {
      console.log(action);
      state.isEdit = action.payload
    },

    // 改变中心画布大小
    changeContentSize: (state, action) => {
      state.contentSize = action.payload
    },

    // 清空domList
    clearDomList: (state) => {
      state.domList = []
    },

    // 删除选中的dom
    deleteDom: (state, action) => {
      state.domList = state.domList.filter(item => {
        return item.id !== action.payload 
      })
      state.domOptions = {}
      state.domId = ''
      state.domType = ''
    },

    // 根据索引插入节点一个组件
    incrementByIndex: (state, action) => {     
      const {payload} = action
      state.domList.splice(payload.index, 0, payload.option)
      state.domOptions = payload.option
      state.domId = payload.option.id
      state.domType = payload.option.type
    },

    // 根据索引移动一个组件
    moveByIndex: (state, action) => {
      const {payload} = action
      state.domList.splice(payload.indexFrom, 1)
      state.domList.splice(payload.indexTo, 0, payload.option)
      state.domOptions = payload.option
      state.domId = payload.option.id
      state.domType = payload.option.type
    },

  },
})

export const { 
  increment, 
  changeOptions, 
  changeId, 
  changeEditStatus, 
  changeContentSize, 
  clearDomList, 
  deleteDom, 
  incrementByIndex,
  moveByIndex
} = homeSlice.actions

export default homeSlice.reducer