import Input from 'antd/lib/input';
import React from 'react';
import { useDispatch } from 'react-redux';
import { changeId } from '../../pages/home/slice'

const App = (options) => {

    const dispatch = useDispatch();
    return (
        <Input
            className='content_input'
            placeholder='请输入'
            value= {options.options?.value_content_resume||options.options?.value_content || ""} onClick={() => {
                console.log(options);
                dispatch(changeId(options.options))
            }}
            style={{
                height: options.options?.height,
                width: options.options?.width || 250,
                marginLeft: options.options?.marginLeft || 15,
                marginRight: options.options?.marginRight || 15,
                marginBottom: options.options?.marginBottom,
                marginTop: options.options?.marginTop || 15,
                zIndex: options.options?.zIndex,
                position: options.options?.position,
                borderRadius: 5, 
            }} />
    )
}
export default App
