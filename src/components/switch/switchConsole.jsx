import { useDispatch } from 'react-redux';
import { changeOptions } from '../../pages/home/slice'
import {
    Form,
    Checkbox,
    Input,
    Radio
} from 'antd';

const App = (data) => {
    let options = { ...data.options }

    const dispatch = useDispatch()

    return (
        <Form layout="vertical">
            <Form.Item label="开关文本">
                <Checkbox onChange={(e) => {
                    options.isText = e.target.checked;
                    dispatch(changeOptions(options))
                }} >开关文本</Checkbox>
            </Form.Item>

            {
                options.isText ? (<Form.Item label="开关文本">
                    <Input onChange={(e) => {
                        options.text = e.target.value;
                        dispatch(changeOptions(options))
                    }} placeholder="修改文字" />
                </Form.Item>) : ''
            }

            <Form.Item label="开关大小">
                <Radio.Group defaultValue='default' onChange={(e) => {
                    options.size = e.target.value
                    dispatch(changeOptions(options))
                }}>
                    <Radio value='default'>默认</Radio>
                    <Radio value='small'>小型</Radio>
                </Radio.Group>
            </Form.Item>

            <Form.Item>
                <Checkbox onChange={(e) => {
                    options.autoFocus = e.target.checked
                    dispatch(changeOptions(options))
                }}>自动获取焦点</Checkbox>
            </Form.Item>

            <Form.Item>
                <Checkbox onChange={(e) => {
                    options.defaultChecked = e.target.checked
                    dispatch(changeOptions(options))
                }}>指定初始是否选中</Checkbox>
            </Form.Item>

            <Form.Item>
                <Checkbox onChange={(e) => {
                    options.disabled = e.target.checked
                    dispatch(changeOptions(options))
                }}>是否禁用</Checkbox>
            </Form.Item>

            <Form.Item>
                <Checkbox onChange={(e) => {
                    options.loading = e.target.checked
                    dispatch(changeOptions(options))
                }}>加载中的开关</Checkbox>
            </Form.Item>
        </Form>
    );
};

export default App;