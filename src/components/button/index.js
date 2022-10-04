import { Button } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import {changeId} from '../../pages/home/slice'

function App(data) {
    const options = data.options
    const dispatch = useDispatch()
    return (
        <>
            <Button type="primary" 
            onClick={() => { console.log(options); 
            dispatch(changeId(options))}}>
            {options.title}</Button>
        </>
    )

}

export default App;