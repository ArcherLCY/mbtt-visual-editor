import React from 'react';
import { useDispatch } from 'react-redux';
import { changeId } from '../../pages/home/slice'
import {
  Form,
  Select,
  Input,
  Radio,
  Checkbox,
  Rate
} from 'antd'
const App = (data) => {
  const options = data.options
  const dispatch = useDispatch()
  return (

    <div className='rateIndex'
      style={{ display: 'flex', justifyContent: options?.justifyContent || 'flex-start' }}
      onClick={
        () => {
          console.log(options);
          dispatch(changeId(options))
        }
      }>
       
      <Form layout="vertical">
          {/* 标题 */}
        <Form.Item 
          label={options?.title || "评分"}
          required={options?.checked}

          onClick={() => {
            console.log(options);
            dispatch(changeId(options))
          }}
          style={{
            fontWeight: 700,
            fontFamily: '微软雅黑',
            fontSize: options?.fontSize,

          }}>
            {/* 提示 */}
          <h4
            onClick={() => {
              console.log(options);
              dispatch(changeId(options))
            }}
            style={{
              fontSize: '10px',
              fontWeight: 500,
              fontFamily: '微软雅黑',
              color: '#b4b4bc',
            }}>
            {options?.tips || ""}
          </h4>
          <Rate
            onClick={
              () => {
                console.log(options);
                dispatch(changeId(options))
              }}>
          </Rate>

        </Form.Item>

      </Form>

    </div>
  )

}

export default App;