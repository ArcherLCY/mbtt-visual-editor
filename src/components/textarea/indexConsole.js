import React from "react";
import Input from "antd/lib/input/Input";
import './textarea_style.css';
import { changeOptions } from '../../pages/home/slice'
import { useDispatch } from "react-redux/es/exports";
const App_textarea = (data) => {
    let options = { ...data.options };
    const dispatch = useDispatch()
    const { TextArea } = Input;
    return (
        <div className="textarea_indexConsole">
            标题<Input
                placeholder="请输入标题"
                className='title'
                onChange={(e) => {
                    options.value_input = e.target.value; console.log(options);
                    dispatch(changeOptions(options))
                }}
            />
            字号<Input type={'text'} className="fontsize" onChange={(e) => {
                options.fontSize = e.target.value; console.log(options);
                dispatch(changeOptions(options))
            }} />

            <TextArea
                rows={4}
                placeholder={'请输入文本内容'}
                className='default'
                onChange={(e) => {
                    options.value = e.target.value; console.log(options);
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
    )
}
export default App_textarea;