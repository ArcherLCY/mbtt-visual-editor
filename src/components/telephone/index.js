import React from 'react';
import { useDispatch } from 'react-redux';
import { changeId } from '../../pages/home/slice'
import {
  Form,
  Select,
  Input,
  Radio,
  Checkbox
} from 'antd'
const App = (options) => {

  const dispatch = useDispatch();
  return (
    <Form layout="vertical">
      {/* 标题 */}
      <Form.Item
        label={options.options?.title || "电话"}
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
        {/* 提示 */}
        <h4 className='indexTips'
            onClick={() => {
              console.log(options);
              dispatch(changeId(options.options))
            }}
            >
            {options.options?.tips || ""}
        </h4>
        <Input
          className='content_input'
          placeholder={options.options?.placeholder || "输入您的电话"}
          onClick={() => {
            console.log(options);
            dispatch(changeId(options.options))
          }}
          style={{
            height: options.options?.height,
            width: options.options?.width || '100%',
            borderRadius: 5,
          }} />
      </Form.Item>
    </Form>
  )
}
export default App
