import { Rate } from 'antd';

import React from 'react';
import { useDispatch } from 'react-redux';
import { changeId } from '../../pages/home/slice'
import './rateStyle.css'
const App = (data) => {
  const options = data.options
  const dispatch = useDispatch()
  return (

    <div className='rate'
      style={{ justifyContent: options?.justifyContent || 'flex-start' }}
      onClick={
        () => {
          console.log(options);
          dispatch(changeId(options))
        }
      }>

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