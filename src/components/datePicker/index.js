import { DatePicker } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeId } from '../../pages/home/slice'

const { RangePicker } = DatePicker;

function App(options) {
  const dispatch = useDispatch()
  const { hasRange, showTime } = options.options;
  let environment = useSelector(state => state.home.environment);

  if (hasRange === 'DatePicker') {
    return (
      <div>
        <DatePicker
          onPanelChange={() => { dispatch(changeId(options.options)) }}
          showTime={showTime}
        />
      </div>

    )
  } else if (hasRange === 'RangePicker') {
    return (
      <div>
        <RangePicker
          onPanelChange={() => { dispatch(changeId(options.options)) }}
          showTime={showTime}
        />
      </div>

    )
  } else {
    console.log('日期选择器类型有误');
  }

}


export default App;