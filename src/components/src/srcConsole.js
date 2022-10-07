import React from "react";
import { Input ,Button} from "antd";
import { changeOptions } from '../../pages/home/slice';
import { useDispatch } from 'react-redux';

const App = (data) => {
    let options = { ...data.options };
    const dispatch = useDispatch();
    return (
        <>
        <div className="srcConsole">
            链接<Input type={'text'} placeholder={'请输入链接'} onChange={(e) => {
                options.href = e.target.value; console.log(options);
                dispatch(changeOptions(options))
            }} id='srcInput'/>
            height<Input type={'text'} onChange={(e) => {
                options.height = e.target.value; console.log(options);
                dispatch(changeOptions(options))
            }} />
            width<Input type={'text'} onChange={(e) => {
                options.width = e.target.value; console.log(options);
                dispatch(changeOptions(options))
            }} />
            left<Input type={'text'} onChange={(e) => {
                options.marginLeft = e.target.value; console.log(options);
                dispatch(changeOptions(options))
            }} />
            right<Input type={'text'} onChange={(e) => {
                options.marginRight = e.target.value; console.log(options);
                dispatch(changeOptions(options))
            }} />
            top  <Input type={'text'} onChange={(e) => {
                options.marginTop = e.target.value; console.log(options);
                dispatch(changeOptions(options))
            }} />
            bottom<Input type={'text'} onChange={(e) => {
                options.marginBottom = e.target.value; console.log(options);
                dispatch(changeOptions(options))
            }} />
            z-index<Input type={'text'} onChange={(e) => {
                options.zIndex = e.target.value; console.log(options);
                dispatch(changeOptions(options))
            }} />
            position
            <select onChange={(e) => {
                options.position = e.target.value; console.log(options);
                dispatch(changeOptions(options))
            }}>
                <option value=" "></option>
                <option value="fixed">fixed</option>
                <option value="relative">relative</option>
                <option value="absolute">absolute</option>
                <option value="sticky">sticky</option>
            </select>
            <Button onClick={() => {
                window.location.href = document.getElementById('srcInput').value
            }}> 点击跳转</Button>
            </div>
        </>
    )
}
export default App