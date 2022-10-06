import Input from 'antd/lib/input';
import React from 'react';
import { useDispatch } from 'react-redux';
import { changeId } from '../../pages/home/slice'

function App(options) {
  const { TextArea } = Input;
  const dispatch = useDispatch()
  return (
    <div className='textarea_index'>
      <div onClick={() => { console.log(options); dispatch(changeId(options.options)) }}
        style={{
          fontSize: options.options?.fontSize,
          marginTop: 15
        }}>
        {options.options?.value_input || "多行文字"}
      </div>
      <TextArea rows={5} value={options.options?.value_textarea || ""} onClick={() => {
        console.log(options);
        dispatch(changeId(options.options))
      }}
        style={{
          height: options.options?.height,
          width: options.options?.width,
          marginLeft: options.options?.marginLeft || 15,
          marginRight: options.options?.marginRight || 15,
          marginBottom: options.options?.marginBottom,
          marginTop: options.options?.marginTop,
          zIndex: options.options?.zIndex,
          position: options.options?.position
        }}

      ></TextArea>
    </div>
  )
}


export default App;