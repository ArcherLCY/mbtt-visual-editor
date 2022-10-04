import { Checkbox } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import {changeId} from '../../pages/home/slice'

function App(options) {
  const dispatch = useDispatch()
  let state = {
    checked: false
  }
  const { autoFocus, defaultChecked, disabled, text } = options.options;
  
  state.checked = defaultChecked
  console.log(state.checked);
  return (
    <Checkbox 
      autoFocus={autoFocus || false} 
      checked={state.checked || false} 
      disabled={disabled || false} 
      onChange={(e) => state.checked = e}
      onClick={() => { dispatch(changeId(options.options))}}>
        {text}
    </Checkbox>
  )
}
    

export default App;