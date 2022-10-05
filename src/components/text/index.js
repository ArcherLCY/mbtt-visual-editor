
import React from 'react';
import { useDispatch } from 'react-redux';
import {changeId} from '../../pages/home/slice'

function App(options) {
  const dispatch = useDispatch()
  const { fontSize, color, lineHeight, fontFamily, value, width, border } = options.options;
  return (
    <p style={{fontSize: fontSize + 'px', color: color, lineHeight: lineHeight, fontFamily: fontFamily , width: width, 
    margin: '5px 20px', paddingLeft: '5px', border: border ? '2px solid #ddd' : '2px solid transparent', borderRadius: '5px'}}
      onClick={() => { dispatch(changeId(options.options))}}>
        {value}
    </p>
  )
}
    

export default App;