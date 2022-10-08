import React from "react";
import { changeOptions } from '../../pages/home/slice';
import { useDispatch } from 'react-redux';
import {
    Form,
    Select,
    Button,
    Input,
    Checkbox,
    Radio,
} from 'antd';
import {PaperClipOutlined} from '@ant-design/icons';
const App = (data) => {
    let options = { ...data.options };
    const dispatch = useDispatch();
    return (
        <div className="linkIndexConsole">
            <h2
                className='title'
            ><PaperClipOutlined /> 链接</h2>
            <Form layout="vertical"
            className='formStyle'>

                <Form.Item label="标题">
                    <Input
                        placeholder="请输入标题"
                        onChange={(e) => {
                            options.title = e.target.value; console.log(options);
                            dispatch(changeOptions(options))
                        }} />
                </Form.Item>
                <Form.Item label="提示">
                    <Input
                        placeholder="请输入提示"
                        className='tips'
                        onChange={(e) => {
                            options.tips = e.target.value; console.log(options);
                            dispatch(changeOptions(options))
                        }} />
                </Form.Item>
                <Form.Item label="链接">
                    <Input id='linkInput' type={'text'} placeholder={'请输入链接'} onChange={(e) => {
                        options.href = e.target.value; console.log(options);
                        dispatch(changeOptions(options))
                    }} />
                </Form.Item>

                <Button onClick={() => {
                    window.location.href = document.getElementById('linkInput').value
                }}> 跳转效果预览</Button>
            </Form>

        </div>

    )
}
export default App