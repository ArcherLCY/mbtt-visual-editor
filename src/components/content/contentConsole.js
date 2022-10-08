import React from "react";
import { changeOptions } from '../../pages/home/slice';
import { useDispatch } from 'react-redux';
import './index_style.css'
import {
    Form,
    Input,
    Checkbox,
    Radio,
} from 'antd'
import { FontColorsOutlined, } from '@ant-design/icons';
const App = (data) => {
    let options = { ...data.options }
    const RadioGroup = Radio.Group;
    const RadioButton = Radio.Button;
    const dispatch = useDispatch();
    return (

        <div className="contentConsole">
            <h2 className='title'>
                <FontColorsOutlined /> 单行文本</h2>
            <Form layout="vertical"
                className='formStyle'>
                <Form.Item label="标题">
                    <Input
                        placeholder="请输入标题"
                        value={options.title}
                        onChange={(e) => {
                            options.title = e.target.value;
                            console.log(options);
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
                <Form.Item label="默认内容">
                    <Input
                        placeholder={'请输入默认内容'}
                        className='default'
                        onChange={(e) => {
                            options.placeholder = e.target.value;
                            console.log(options);
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
            </Form>
            <Form.Item label=""
                style={{
                    fontFamily: '微软雅黑',
                }}
            >
                <Checkbox
                    onChange={(e) => {
                        options.checked = e.target.checked; console.log(options);
                        dispatch(changeOptions(options))
                    }}
                >
                    这是个必填项
                </Checkbox>
            </Form.Item>
        </div>

    )
}
export default App