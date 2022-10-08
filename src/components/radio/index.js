import { Radio } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { changeId } from '../../pages/home/slice'

function App(options) {
  const dispatch = useDispatch()
  const { inputValue,autoFocus,defaultChecked,disabled } = options.options;

  return (
    <Radio.Group>
      {
        inputValue.map((item, index) => {
          return (
            <Radio
              autoFocus={autoFocus || false}
              defaultChecked={defaultChecked || false}
              disabled={disabled || false}
              value={item.text}
              onClick={() => { dispatch(changeId(options.options)) }}
              key={index}
            >{item.text}</Radio>
          )
        })
      }
    </Radio.Group>



  )
}


export default App;