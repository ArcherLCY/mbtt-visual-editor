import { Card } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { changeId } from '../../pages/home/slice'
import './card.css'

function App(options) {
  const dispatch = useDispatch()
  return (
    <Card title={options.options?.title || ""} hoverable
      onClick={() => { console.log(options); dispatch(changeId(options.options)) }}
      className = 'card'></Card>
  )
}


export default App;