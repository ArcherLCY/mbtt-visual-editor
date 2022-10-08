import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeId } from '../../pages/home/slice'
import {
  Form,
  DatePicker
} from 'antd'
const { RangePicker } = DatePicker;
function App(options) {
  const dispatch = useDispatch()
  const { hasRange, showTime, placeholder } = options.options;
  let environment = useSelector(state => state.home.environment);
  if (hasRange === 'DatePicker') {
    return (
      <div className='dateConsole'
        onClick={(e) => {
          dispatch(changeId(options.options));
          e.stopPropagation();
          e.preventDefault();
        }}>
        <Form layout="vertical">
          <Form.Item label={options.options?.title || "日期"}
            required={options.options?.checked}
            onClick={() => {
              console.log(options);
              dispatch(changeId(options.options))
            }}
            style={{
              fontWeight: 700,
              fontFamily: '微软雅黑',
              fontSize: options.options?.fontSize,
            }}
          >
            <h4 
            className='indexTips'
            onClick={() => {
              console.log(options);
              dispatch(changeId(options.options))
            }}
            >
            {options.options?.tips || ""}
          </h4>
            <DatePicker

              onPanelChange={(e) => {
                e.preventDefault();
              }}
              showTime={showTime}
              placeholder={placeholder||"默认提示"}
              style={{
                width: options.options?.width || '100%',
              }}
            />
          </Form.Item>
        </Form>
      </div>
    )
  }
  else if (hasRange === 'RangePicker') {
    return (
      <div className='rangeConsole'
        onClick={() => {
          dispatch(changeId(options.options));
        }}>
        <Form layout="vertical">
          <Form.Item label={options.options?.title || "起止时间"}
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
            <h4
              onClick={() => {
                console.log(options);
                dispatch(changeId(options.options))
              }}
              style={{
                fontSize: '10px',
                fontWeight: 500,
                fontFamily: '微软雅黑',
                color: '#b4b4bc',
              }} >
            {options.options?.tips || ""}
            </h4>
            <RangePicker
              showTime={showTime}
              placeholder={placeholder}
              style={{
                width: options.options?.width || '100%',
              }}
            />
          </Form.Item>
        </Form>
      </div>
    )
  } else {
    console.log('日期选择器类型有误');
  }

}


export default App;