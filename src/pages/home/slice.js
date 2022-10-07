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
    dragDom: null, //正在拖拽的dom
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
      console.log(state);
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
      console.log(state.domList);
      state.domList.filter(item => {
        return item.id !== state.domId
      })
      console.log(state.domList);
    },

    // 根据索引插入节点一个组件
    incrementByIndex: (state, action) => {
      state.domList.splice(action.payload.index, 0, action.payload.option)
      state.domOptions = action.payload.option
      state.domId = action.payload.option.id
      state.domType = action.payload.option.type
    },

    // 更新正在拖拽的dom
    updatedragDom: (state, action) => {
      state.dragDom = action.payload
      state.domOptions = action.payload
      state.domId = action.payload.id
      state.domType = action.payload.type
      console.log(state);
    },
  },
})

export const { increment, changeOptions, changeId, changeEditStatus, changeContentSize, clearDomList, deleteDom, incrementByIndex  } = homeSlice.actions

export default homeSlice.reducer