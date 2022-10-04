import React from "react";
// import { showPictureValue } from "../../pages/home/slice";
import { useDispatch } from "react-redux";
import { changeOptions } from '../../pages/home/slice'
import './picture.css'
import Input from "antd/lib/input";
import Button from "antd/lib/button";
// import ConsoleStyle from '../console_style/console_style'
import { useRef } from 'react';
const App_picture = (data) => {
    let options = { ...data.options }
    const dispatch = useDispatch();
    const fileInputEl = useRef(null);
    function choosefile(file) {
        let url = null;
        // 需要针对不同的浏览器执行不同的 js 函数
        if (window.createObjectURL != undefined) { // basic
            url = window.createObjectURL(file);
        }
        else if (window.URL != undefined) { // mozilla(firefox)
            url = window.URL.createObjectURL(file);
        }
        else if (window.webkitURL != undefined) { // webkit or chrome
            url = window.webkitURL.createObjectURL(file);
        }
        return url
    }
    return (
        <div className="picture_input">
            <input type={'file'} id={'file'} ref={fileInputEl} hidden onChange={() => {
                let url = choosefile(document.getElementById('file').files[0])
                options.src = url
                dispatch(changeOptions(options))
            }
            } />
            <Button type="dashed" onClick={() => fileInputEl.current.click()} className="picture_button">上传图片</Button>
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
        </div>
    )
}
export default App_picture