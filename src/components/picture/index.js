// 显示在屏幕中间
import React from 'react';
import { useDispatch } from 'react-redux';
import { changeId } from '../../pages/home/slice'
import {
  Form,
} from 'antd'
function App(options) {
  const dispatch = useDispatch()
  return (
    <Form layout="vertical">
      <Form.Item label={options.options?.title || "图片"}
        required={options.options?.checked}
        onClick={() => {
          console.log(options);
          dispatch(changeId(options.options))
        }}
        style={{
          fontWeight: 700,
          fontFamily: '微软雅黑',
          fontSize: options.options?.fontSize,
        }}>
        <div className='picturIndex'>

          <h4 className='indexTips'
            onClick={() => {
              console.log(options);
              dispatch(changeId(options.options))
            }}
          >
            {options.options?.tips || ""}
          </h4>
          <img src={options.options?.src} className={'picture'} onClick={() => { console.log(options); dispatch(changeId(options.options)) }}
            style={{

            }} />
        </div>
      </Form.Item>
    </Form>
  )
}


export default App;