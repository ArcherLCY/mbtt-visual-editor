import { useDispatch } from 'react-redux';
import { changeOptions } from '../../pages/home/slice'
import {
    Form,
    Select,
    Input,
    Radio,
    Checkbox
} from 'antd';

const { Option } = Select;

const App = (data) => {
    let options = { ...data.options }

    const dispatch = useDispatch()

    return (
        <Form layout="vertical">
            <Form.Item label="文本">
                <Input onChange={(e) => {
                    options.value = e.target.value;
                    dispatch(changeOptions(options))
                }} placeholder="修改文字"/>
            </Form.Item>

            <Form.Item label="大小">
                <Radio.Group onChange={(e) => {
                        options.fontSize = e.target.value;
                        dispatch(changeOptions(options))
                    }} defaultValue='16'>
                    <Radio value='20'>大号</Radio>
                    <Radio value='16'>中等</Radio>
                    <Radio value='14'>小号</Radio>
                    </Radio.Group>
            </Form.Item>

            <Form.Item label="行高">
                <Radio.Group onChange={(e) => {
                        options.lineHeight = e.target.value;
                        dispatch(changeOptions(options))
                    }} defaultValue='1'>
                    <Radio value='2'>2倍</Radio>
                    <Radio value='1.5'>1.5倍</Radio>
                    <Radio value='1'>默认</Radio>
                    </Radio.Group>
            </Form.Item>

            <Form.Item label="宽度">
                <Radio.Group onChange={(e) => {
                        options.width = e.target.value;
                        dispatch(changeOptions(options))
                    }} defaultValue='100%'>
                    <Radio value='25%'>25%</Radio>
                    <Radio value='50%'>50%</Radio>
                    <Radio value='75%'>75%</Radio>
                    <Radio value='100%'>100%</Radio>
                    </Radio.Group>
            </Form.Item>

            <Form.Item label="字体">
            <Select defaultValue="Microsoft YaHei" style={{ width: 120 }} onChange={(e) => {
                    options.fontFamily = e;
                    dispatch(changeOptions(options))
                }}>
                    <Option value="kaiti">楷体</Option>
                    <Option value="Microsoft YaHei">微软雅黑</Option>
                    <Option value="SimHei">黑体</Option>
                    <Option value="SimSun">宋体</Option>
                    <Option value="xingkai">华文行楷</Option>              
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

            <Form.Item>
            <Checkbox onChange={(e) => {
                    options.border = e.target.checked;
                    dispatch(changeOptions(options))
                }}>边框</Checkbox>
            </Form.Item>
        </Form>
    );
};

export default App;