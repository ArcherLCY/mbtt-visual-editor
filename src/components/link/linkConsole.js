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
const App = (data) => {
    let options = { ...data.options };
    const dispatch = useDispatch();
    const RadioGroup = Radio.Group;
    const RadioButton= Radio.Button;

    return (
        <div className="linkIndexConsole">
            <Form layout="vertical"
                style={{
                    fontWeight: 700,
                    fontFamily: '微软雅黑',
                }}
            >
                <Form.Item label="标题">
                    <Input
                        placeholder="请输入标题"
                        className='title'
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
                    <Input type={'text'} placeholder={'请输入链接'} onChange={(e) => {
                        options.href = e.target.value; console.log(options);
                        dispatch(changeOptions(options))
                    }} />
                </Form.Item>

                <Form.Item label="所占字段%">
                        <RadioGroup
                        defaultValue="d"
                        buttonStyle="solid"
                        >
                            <RadioButton 
                                value="a"
                                onClick={(e) => {
                                    options.width = '25%';
                                    console.log(options);
                                    dispatch(changeOptions(options))
                                }} >25</RadioButton>
                            <RadioButton
                                value="b"
                                onClick={(e) => {
                                    options.width = '50%';
                                    console.log(options);
                                    dispatch(changeOptions(options))
                                }} >50</RadioButton>
                            <RadioButton
                                value="c"
                                onClick={(e) => {
                                    options.width = '75%';
                                    console.log(options);
                                    dispatch(changeOptions(options))
                                }}  >75</RadioButton>
                            <RadioButton
                                value="d"
                                onClick={(e) => {

                                    options.width = '100%';
                                    console.log(options);
                                    dispatch(changeOptions(options))
                                }}  >100</RadioButton>
                        </RadioGroup>
                    </Form.Item>
                <Button onClick={() => {
                    window.location.href = document.getElementById('srcInput').value
                }}> 跳转效果预览</Button>
            </Form>

        </div>

    )
}
export default App