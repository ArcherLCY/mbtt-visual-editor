import React from "react";
import { Input } from "antd";
import { changeOptions } from '../../pages/home/slice';
import { useDispatch } from 'react-redux';

const App = (data) => {
    let options = { ...data.options }
    const dispatch = useDispatch();
    return (
        <>
            <Input
                maxLength={8}
                placeholder={"请输入文本"}
                className='input_nian'
                onChange={(e) => { options.value_content = e.target.value; console.log(options); dispatch(changeOptions(options)) }} />
            height<Input type={'text'} onChange={(e) => {
                options.height = e.target.value; console.log(options);
                dispatch(changeOptions(options))
            }} />
        </>
    )
}
export default App