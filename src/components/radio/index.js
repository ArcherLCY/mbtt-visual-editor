import { Radio } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import {changeId} from '../../pages/home/slice'

function App(options) {
  const dispatch = useDispatch()
  const { autoFocus, checked, defaultChecked, disabled, text } = options.options;
  console.log(options.options);
  return (
    <Radio 
      autoFocus={autoFocus || false} 
      checked={checked || false} 
      defaultChecked={defaultChecked || false} 
      disabled={disabled || false} 
      onClick={() => { dispatch(changeId(options.options))}}>
        {text}
    </Radio>
  )
}
    

export default App;