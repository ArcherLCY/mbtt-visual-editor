import React from 'react';
import { useDispatch } from 'react-redux';
import { changeId } from '../../pages/home/slice'
import { useEffect } from 'react';
import './link.css'
import {
    Form,
    Select,
    Input,
    Radio,
    Checkbox
} from 'antd'
const App = (options) => {
    const dispatch = useDispatch();
    return (
        <Form layout="vertical">

            <Form.Item label={options.options?.title || "链接"}
                required={options.options?.checked}
                onClick={() => {
                    console.log(options);
                    dispatch(changeId(options.options))
                }}
                style={{
                    fontWeight: 700,
                    fontFamily: '微软雅黑',
                    fontSize: options.options?.fontSize,
                }}>
                <h4 className='indexTips'
                    onClick={() => {
                        console.log(options);
                        dispatch(changeId(options.options))
                    }}
                >
                    {options.options?.tips || ""}
                </h4>
                <a
                    id='link'
                    className='link'
                    onChange={() => {
                        console.log(options);
                        dispatch(changeId(options.options))
                        window.location.href = document.getElementById('link').innerHTML
                    }}
                    style={{
                        height: options.options?.height,
                        width: options.options?.width || 500,
                        borderRadius: 5,
                    }}
                >
                    {options.options?.href || "输入网址"}
                </a>
            </Form.Item>
        </Form>
    )
}
export default App