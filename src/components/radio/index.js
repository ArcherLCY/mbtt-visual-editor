import { Radio } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { changeId } from '../../pages/home/slice'

function App(options) {
  const dispatch = useDispatch()
  const { autoFocus, defaultChecked, disabled, text } = options.options;

  const content = text;
  return (
    // <Radio.Group
    //   options={content}
    //   autoFocus={autoFocus || false}
    //   defaultChecked={defaultChecked || false}
    //   disabled={disabled || false}
    //   onClick={() => { dispatch(changeId(options.options)) }}
    // />
    <Radio.Group>
      <Radio ></Radio>
      <Radio ></Radio>
      <Radio></Radio>
      <Radio></Radio>
      <Radio></Radio>
    </Radio.Group>


  )
}


export default App;