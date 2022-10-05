import { Switch } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { changeId } from '../../pages/home/slice'
import './index.css';

function App(options) {
  const dispatch = useDispatch()
  const { autoFocus, defaultChecked, disabled, loading, size, isText, text } = options.options;

  return (
    <span className='Switch'>
      <Switch
        autoFocus={autoFocus || false}
        defaultChecked={defaultChecked || true}
        disabled={disabled || false}
        loading={loading || false}
        size={size || 'default'}
        onClick={() => { dispatch(changeId(options.options)) }}>
      </Switch>
      
      {
        isText ? (<span className='Switch-span'>{text}</span>) : ''
      }
    </span>
  )
}


export default App;