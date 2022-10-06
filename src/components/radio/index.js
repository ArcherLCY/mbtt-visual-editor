import { Radio } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import {changeId} from '../../pages/home/slice'

function App(options) {
  const dispatch = useDispatch()
  const { autoFocus, defaultChecked, disabled, text } = options.options;
  return (
    <Radio 
      autoFocus={autoFocus || false} 
      defaultChecked={defaultChecked || false} 
      disabled={disabled || false} 
      onClick={() => { dispatch(changeId(options.options))}}>
        {text}
    </Radio>
  )
}
    

export default App;