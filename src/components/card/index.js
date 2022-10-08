import { Card } from 'antd';
import React from 'react';
import { useDispatch} from 'react-redux';
import { useRef } from 'react';
import { changeId } from '../../pages/home/slice'

function App(options) {
  const dispatch = useDispatch()
  const name = useRef();
  return (
    <>
    <Card title={options.options?.title || ""}
      hoverable
      onClick={() => {
        console.log('options',options);
        dispatch(changeId(options.options))
      }}>

    </Card>
    </>
  )
}


export default App;