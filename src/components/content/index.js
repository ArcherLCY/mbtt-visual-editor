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
        label={options.options?.title || "单行文本"}
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
        <h4 className='tips'
          onClick={() => {
            console.log(options);
            dispatch(changeId(options.options))
          }}
          style={{
            fontSize: '10px',
            fontWeight: 500,
            fontFamily: '微软雅黑',
            color: '#b4b4bc',
          }}>
          {options.options?.tips || ""}
        </h4>
        <Input
          className='content_input'
          placeholder={options.options?.placeholder || "输入默认内容"}
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
