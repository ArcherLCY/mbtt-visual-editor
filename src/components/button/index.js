
import { Button } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import {changeId} from '../../pages/home/slice'

function App(options) {
  const dispatch = useDispatch()
  const { style, value, shape, href, target, size, disabled } = options.options;
  return (
    <Button 
      type={style} 
      shape={shape} 
      href={href} 
      target={target} 
      size={size} 
      disabled={disabled} 
      onClick={() => { dispatch(changeId(options.options))}}>
        {value}
    </Button>
  )
}
    


// function App(data) {
//     const options = data.options
//     const dispatch = useDispatch()
//     return (
//         <>
//             <Button type="primary" onClick={() => { console.log(options); dispatch(changeId(options))}}>{options.title}</Button>
//         </>
//     )

// }


export default App;