import { DatePicker } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { changeId } from '../../pages/home/slice'

const { RangePicker } = DatePicker;

function App(options) {
  const dispatch = useDispatch()
  const { hasRange, showTime, placeholder } = options.options;

  if (hasRange === 'DatePicker') {
    return (
      <div onClick={(e) => {
        dispatch(changeId(options.options));
        e.stopPropagation();
        e.preventDefault();
      }}>
        <DatePicker
          onPanelChange={(e) => {
            e.preventDefault();
          }}
          showTime={showTime}
          placeholder={placeholder}
        />
      </div>

    )
  } else if (hasRange === 'RangePicker') {
    return (
      <div onClick={() => {
        dispatch(changeId(options.options));
      }}>
        <RangePicker
          showTime={showTime}
          placeholder={placeholder}
        />
      </div>

    )
  } else {
    console.log('日期选择器类型有误');
  }

}


export default App;