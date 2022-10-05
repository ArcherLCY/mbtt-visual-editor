import { Calendar } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { changeId } from '../../pages/home/slice'

function App(options) {
  const dispatch = useDispatch()
  const { mode } = options.options;
  return (
      <Calendar 
      fullscreen={false} 
      onChange={() => { dispatch(changeId(options.options))}} 
      mode={mode}/>
  )
}


export default App;