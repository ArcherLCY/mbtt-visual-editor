import { useDispatch } from 'react-redux';
import { changeOptions } from '../../pages/home/slice'
import {
    Form,
    Select,
    Input,
    Radio,
    Button,
} from 'antd';

const { Option } = Select;

const App = (data) => {
    let options = { ...data.options };
    const ButtonGroup = Button.Group;
    const dispatch = useDispatch()

    return (
        <Form layout="vertical"
            style={{
                fontWeight: 700,
                fontFamily: '微软雅黑',
            }}
        >
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

            {/* <Form.Item label="行高">
                <Radio.Group onChange={(e) => {
                    options.lineHeight = e.target.value;
                    dispatch(changeOptions(options))
                }} defaultValue='1'>
                    <Radio value='2'>2倍</Radio>
                    <Radio value='1.5'>1.5倍</Radio>
                    <Radio value='1'>默认</Radio>
                </Radio.Group>
            </Form.Item> */}

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
                <Select defaultValue="Microsoft YaHei" style={{ width: 120 }} onChange={(e) => {
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
                    <Option value="red">红色</Option>
                    <Option value="blue">蓝色</Option>
                    <Option value="green">绿色</Option>
                    <Option value="yellow">黄色</Option>
                    <Option value="purple">紫色</Option>
                    <Option value="#000">黑色</Option>
                    <Option value="#777">灰色</Option>
                </Select>
            </Form.Item>

        </Form >
    );
};

export default App;