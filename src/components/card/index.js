import { Card } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import {changeId} from '../../pages/home/slice'

function App(options) {
  const dispatch = useDispatch()
  return (
    <Card title={options.options?.title || ""} hoverable onClick={() => { console.log(options); dispatch(changeId(options.options))}}></Card>
  )
}

export default App;