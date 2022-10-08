import { useDispatch } from 'react-redux';
import { changeOptions } from '../../pages/home/slice'
import {
    Form,
    Input,
    Select,
    Checkbox,
    Radio
} from 'antd';
import {AppstoreAddOutlined} from '@ant-design/icons';
const { Option } = Select;


const App = (data) => {
    let options = { ...data.options }
    const RadioGroup = Radio.Group;
    const RadioButton = Radio.Button;
    const dispatch = useDispatch()

    return (
        <div className="buttonConsole">
            <h2 className='title'
            ><AppstoreAddOutlined/> 按钮</h2>

            <Form layout="vertical"
                style={{
                    fontWeight: 700,
                    fontFamily: '微软雅黑',
                }}
            >
                <Form.Item label="按钮文字">
                    <Input
                        onChange={(e) => {
                            options.value = e.target.value;
                            dispatch(changeOptions(options))
                        }} placeholder="修改按钮的文字" />
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
                        <Option value="round">椭圆</Option>
                    </Select>
                </Form.Item>

                <Form.Item label="是否禁止">
                    <Checkbox onChange={(e) => {
                        options.disabled = e.target.checked;
                        dispatch(changeOptions(options))
                    }}>点击禁止</Checkbox>
                </Form.Item>
                <Form.Item label="所占字段">
                    <RadioGroup
                        defaultValue="a"
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
                <Form.Item label="跳转地址">
                    <Input onChange={(e) => {
                        options.href = e.target.value;
                        dispatch(changeOptions(options))
                    }} placeholder="输入地址进行链接同样的跳转" />
                </Form.Item>
                <Form.Item label="新建页面"
                // style={{ display: options.href ? 'block' : 'none' }}
                >
                    <Checkbox onChange={(e) => {
                        options.target = e.target.checked ? '_blank' : '_self';
                        dispatch(changeOptions(options))
                    }}>跳转时是否新建页</Checkbox>
                </Form.Item>
            </Form>
        </div>
    );
};

export default App;