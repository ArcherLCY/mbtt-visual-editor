// 显示在屏幕中间
import {  Card } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { changeId } from '../../pages/home/slice'
const { Meta } = Card;

function App(options) {
  const dispatch = useDispatch();
  const { height,width,marginLeft,marginRight,marginBottom,marginTop,zIndex,position,src,title } = options.options;

  return (
    <Card
      size="small"
      title={title}
    >
      <Meta description="这是描述" />
      <img src={src} className={'picture'} onClick={() => { dispatch(changeId(options.options)) }}
        style={{
          height: height,
          width: width,
          marginLeft: marginLeft || 15,
          marginRight: marginRight || 15,
          marginBottom: marginBottom,
          marginTop: marginTop || 15,
          zIndex: zIndex,
          position: position
        }} />
    </Card>
  )
}


export default App;