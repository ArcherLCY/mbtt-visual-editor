
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
import './index.css'
function App(data) {
  const dispatch = useDispatch()
  let options = { ...data.options }

  const {justifyContent,fontSize, color, lineHeight, fontFamily, value, fontWeight, border } = options;
  return (
    <div className = 'textIndex'
    style={{justifyContent:justifyContent|| 'center'}}
    onClick={
      () => {
        console.log(options);
        dispatch(changeId(options))
      }
    }
    >
    <Form.Item>
    <h2
      style={{
        fontSize: fontSize,
        color: color || '#000',
        lineHeight: lineHeight,
        fontFamily: fontFamily||'微软雅黑',
        fontWeight: fontWeight,
        margin: '5px 20px',
        paddingLeft: '5px',
      }}
      onClick={() => { dispatch(changeId(options)) }}>
      {value||"文本"}
    </h2>
     </Form.Item>
    </div>
  )
}

export default App;