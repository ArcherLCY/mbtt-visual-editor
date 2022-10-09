import { Button } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import {changeId} from '../../pages/home/slice'
import { useRef } from 'react';

function App(options) {
  const name_ = useRef();
  const dispatch = useDispatch()
  const { style,width, value, shape, href, target, size, disabled } = options.options;
  return (
   
    <Button 
      type={style} 
      shape={shape} 
      href={href} 
      target={target} 
      size={size} 
      style={{width:width||"25%"}}
      disabled={disabled} 
      onClick={() => { dispatch(changeId(options.options))}}>
        {value}
    </Button>
  )
}
    

export default App;