import React from "react";
import './textarea_style.css';
import { changeOptions } from '../../pages/home/slice'
import { useDispatch } from "react-redux/es/exports";
import {
    Form,
    Select,
    Button,
    Input,
    Radio,
    Checkbox
} from 'antd';
import { FontColorsOutlined, } from '@ant-design/icons';

const App_textarea = (data) => {
    let options = { ...data.options };
    const dispatch = useDispatch()
    const RadioGroup = Radio.Group;
    const RadioButton = Radio.Button;

    const { TextArea } = Input;
    // console.log(options.contentSize)
    return (
        <div className="textareaConsole">
            <h2 className='title'>
            <FontColorsOutlined /> 多行文本</h2>
            <Form layout="vertical"
            className='formStyle'>
                
                {/*标题 */}
                <Form.Item label="标题">
                    <Input
                        placeholder="请输入标题"
                        onChange={(e) => {
                            options.title = e.target.value; console.log(options);
                            dispatch(changeOptions(options))
                        }} />
                </Form.Item>
                {/* 提示 */}
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
                    <TextArea
                        rows={4}
                        placeholder={'修改默认内容'}
                        className='default'
                        onChange={(e) => {
                            options.placeholder = e.target.value;
                            console.log(options);
                            dispatch(changeOptions(options))
                        }} />
                </Form.Item>


                <Form.Item label="所占字段">
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
export default App_textarea;