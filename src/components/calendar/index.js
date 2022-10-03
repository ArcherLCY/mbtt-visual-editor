import { Calendar } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { changeId } from '../../pages/home/slice'

function App(options) {
  const dispatch = useDispatch()
  const { mode } = options.options;
  return (
    <div className="site-calendar-demo-card">
      <Calendar fullscreen={false} onChange={() => { dispatch(changeId(options.options))}} mode={mode}/>
    </div>
  )
}


export default App;