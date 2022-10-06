import React from "react";
import { Input } from "antd";
import { changeOptions } from '../../pages/home/slice';
import { useDispatch } from 'react-redux';
import './index_style.css'
const App = (data) => {
    let options = { ...data.options }
    const dispatch = useDispatch();
    return (
        <>
            <div className="contentConsole">
                <Input
                    maxLength={8}
                    placeholder={"请输入文本"}
                    className='input_nian'
                    onChange={(e) => {
                        console.log('e',e.target.value)
                        options.value_content = e.target.value; console.log(options);
                        options.value_content_resume = e.target.value
                        dispatch(changeOptions(options))
                    }} />
                height<Input type={'text'} onChange={(e) => {
                    options.height = e.target.value; console.log(options);
                    dispatch(changeOptions(options))
                }} />
                width<Input type={'text'} onChange={(e) => {
                    options.width = e.target.value; console.log(options);
                    dispatch(changeOptions(options))
                }} />
                left<Input type={'text'} className="picture_marginLeft" onChange={(e) => {
                    options.marginLeft = e.target.value; console.log(options);
                    dispatch(changeOptions(options))
                }} />
                top  <Input type={'text'} className="picture_marginTop" onChange={(e) => {
                    options.marginTop = e.target.value; console.log(options);
                    dispatch(changeOptions(options))
                }} />
                bottom<Input type={'text'} className="picture_marginBottom" onChange={(e) => {
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
            </div>
        </>
    )
}
export default App