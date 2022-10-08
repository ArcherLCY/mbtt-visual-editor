import { useDispatch } from 'react-redux';
import { changeOptions } from '../../pages/home/slice'
import {
    Form,
    Input,
    Select,
    Checkbox,
    Radio
} from 'antd';

const { Option } = Select;


const App = (data) => {
    let options = { ...data.options }

    const dispatch = useDispatch()

    return (
        <Form
            layout="vertical"
        >

            <Form.Item label="按钮文字">
                <Input onChange={(e) => {
                    options.value = e.target.value;
                    dispatch(changeOptions(options))
                }} placeholder="修改按钮的文字" />
            </Form.Item>
            
            <Form.Item label="按钮大小">
                <Radio.Group onChange={(e) => {
                    options.size = e.target.value;
                    dispatch(changeOptions(options))
                }} defaultValue='middle'>
                    <Radio value='large'>大号</Radio>
                    <Radio value='middle'>中等</Radio>
                    <Radio value='small'>小号</Radio>
                </Radio.Group>
            </Form.Item>
            <Form.Item label="按钮样式">
                <Select defaultValue="primary" style={{ width: 120 }} onChange={(e) => {
                    options.style = e;
                    dispatch(changeOptions(options))
                }}>
                    <Option value="default">默认</Option>
                    <Option value="primary">主要按钮</Option>
                    <Option value="ghost">空背景</Option>
                    <Option value="dashed">虚线</Option>
                    <Option value="link">链接</Option>
                    <Option value="danger">危险</Option>
                </Select>
            </Form.Item>
            <Form.Item label="按钮形状">
                <Select defaultValue="default" style={{ width: 120 }} onChange={(e) => {
                    options.shape = e;
                    dispatch(changeOptions(options))
                }}>
                    <Option value="default">默认</Option>
                    <Option value="circle">圆形</Option>
                    <Option value="round">椭圆</Option>
                </Select>
            </Form.Item>
            <Form.Item label="是否禁止">
                <Checkbox onChange={(e) => {
                    options.disabled = e.target.checked;
                    dispatch(changeOptions(options))
                }}>点击禁止</Checkbox>
            </Form.Item>
            <Form.Item label="跳转地址">
                <Input onChange={(e) => {
                    options.href = e.target.value;
                    dispatch(changeOptions(options))
                }} placeholder="输入地址进行链接同样的跳转" />
            </Form.Item>
            <Form.Item label="新建页面" style={{ display: options.href ? 'block' : 'none' }}>
                <Checkbox onChange={(e) => {
                    options.target = e.target.checked ? '_blank' : '_self';
                    dispatch(changeOptions(options))
                }}>跳转时是否新建页</Checkbox>
            </Form.Item>
        </Form>
    );
};

export default App;