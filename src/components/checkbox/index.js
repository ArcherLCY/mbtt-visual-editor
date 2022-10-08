import { Checkbox } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import {changeId} from '../../pages/home/slice'

function App(options) {
  const dispatch = useDispatch()
  const { autoFocus, defaultChecked, disabled, text } = options.options;
  return (
    <Checkbox 
      autoFocus={autoFocus || false} 
      defaultChecked={defaultChecked || false} 
      disabled={disabled || false} 
      onClick={() => { dispatch(changeId(options.options))}}>
        {text}
    </Checkbox>
    
  )
}
    

export default App;