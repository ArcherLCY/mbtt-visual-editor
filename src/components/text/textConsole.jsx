import { useDispatch } from 'react-redux';
import { changeOptions } from '../../pages/home/slice'
import {
    Form,
    Select,
    Input,
    Radio,
    Button,
} from 'antd';
import { FontColorsOutlined} from '@ant-design/icons';
import '../../pages/home/console/consoleStyle.css'
const { Option } = Select;

const App = (data) => {
    let options = { ...data.options };
    const ButtonGroup = Button.Group;
    const dispatch = useDispatch()

    return (
        <div className='textConsole'>
        <h2  className='title'>
        <FontColorsOutlined />文本</h2>

        <Form layout="vertical"
            className='formStyle'>
                
                <Form.Item label="文案" >
                    <Input onChange={(e) => {
                        options.value = e.target.value;
                        dispatch(changeOptions(options))
                    }} placeholder="修改文字" />
                </Form.Item>
                <Form.Item label="位置">
                    <ButtonGroup>
                        <Button
                            onClick={(e) => {
                                // 居左
                                options.justifyContent = 'start';
                                console.log(options);
                                dispatch(changeOptions(options))
                            }}
                        >居左</Button>
                        <Button
                            onClick={(e) => {
                                // 居中
                                options.justifyContent = 'center';
                                console.log(options);
                                dispatch(changeOptions(options))
                            }}
                        >居中</Button>
                        <Button
                            onClick={(e) => {
                                // 居右
                                options.justifyContent = 'end';
                                console.log(options);
                                dispatch(changeOptions(options))
                            }}
                        >居右</Button>

                    </ButtonGroup>
                </Form.Item>
                <Form.Item label="大小">
                    <ButtonGroup>
                        <Button
                            onClick={(e) => {
                                options.fontSize = '8px';
                                console.log(options);
                                dispatch(changeOptions(options))
                            }}>小号</Button>
                        <Button
                            onClick={(e) => {
                                options.fontSize = '18px';
                                console.log(options);
                                dispatch(changeOptions(options))
                            }}>中等</Button>
                        <Button
                            onClick={(e) => {
                                options.fontSize = '24px';
                                console.log(options);
                                dispatch(changeOptions(options))
                            }} >大号</Button>
                    </ButtonGroup>
                </Form.Item>
                <Form.Item label="粗细">
                    <ButtonGroup>
                        <Button
                            onClick={(e) => {
                                options.fontWeight = '400';
                                console.log(options);
                                dispatch(changeOptions(options))
                            }}>正常</Button>
                        <Button
                            onClick={(e) => {
                                options.fontWeight = '700';
                                console.log(options);
                                dispatch(changeOptions(options))
                            }}
                        >加粗</Button>
                    </ButtonGroup>
                </Form.Item>

                <Form.Item label="字体">
                    <Select defaultValue="Microsoft YaHei" 
                    style={{ width: 120 }} onChange={(e) => {
                        options.fontFamily = e;
                        dispatch(changeOptions(options))
                    }}>
                        <Option
                            value="kaiti"
                            style={{ fontFamily: "kaiti" }}

                        >楷体</Option>
                        <Option
                            value="SimHei"
                            style={{ fontFamily: "SimHei" }}
                        >黑体</Option>
                        <Option
                            value="SimSun"
                            style={{ fontFamily: "SimSun" }}
                        >宋体</Option>
                        <Option
                            value="STFangsong"
                            style={{ fontFamily: "STFangsong" }}
                        >仿宋</Option>
                        <Option
                            value="Microsoft YaHei"
                            style={{ fontFamily: "Microsoft YaHei" }}
                        >微软雅黑</Option>
                    </Select>
                </Form.Item>

                <Form.Item label="颜色">
                    <Select defaultValue="#000" style={{ width: 120 }} onChange={(e) => {
                        options.color = e;
                        dispatch(changeOptions(options))
                    }}>
                        <Option value="red" style={{ color: "red" }} >红色</Option>
                        <Option value="blue" style={{ color: "blue" }}>蓝色</Option>
                        <Option value="green" style={{ color: "green" }}>绿色</Option>
                        <Option value="yellow" style={{ color: "yellow" }}>黄色</Option>
                        <Option value="purple" style={{ color: "purple" }}>紫色</Option>
                        <Option value="#000" style={{ color: "#000" }}>黑色</Option>
                        <Option value="#777" style={{ color: "#777" }}>灰色</Option>
                    </Select>
                </Form.Item>

            </Form >
        </div>

    );
};

export default App;