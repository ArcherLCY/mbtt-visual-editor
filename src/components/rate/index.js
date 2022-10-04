import { Rate } from 'antd';

import React from 'react';
import { useDispatch } from 'react-redux';
import { changeId } from '../../pages/home/slice'
const App = (data) => {
  const options = data.options
  const dispatch = useDispatch()
  return (
    <div
      style={{ margin: options?.margin || '0' }}
      onClick={
        () => {
          console.log(options);
          dispatch(changeId(options))
        }
      }>

      <h3>{options.title}</h3>

      <Rate
        onClick={
          () => {
            console.log(options);
            dispatch(changeId(options))
          }}>
      </Rate>

    </div>
  )

}

export default App;