import { useDispatch } from 'react-redux';
import { changeOptions } from '../../pages/home/slice'
import {
    Form,
    Checkbox,
    Input 
} from 'antd';

const App = (data) => {
    let options = { ...data.options }

    const dispatch = useDispatch()

    return (
        <Form layout="vertical">
            <Form.Item label="单选框文本">
                <Input onChange={(e) => {
                    options.text = e.target.value;
                    dispatch(changeOptions(options))
                }} placeholder="修改文字"/>
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
                }}>指定当前是否选中</Checkbox>
            </Form.Item>

            <Form.Item>
                <Checkbox onChange={(e) => {
                    options.disabled = e.target.checked
                    dispatch(changeOptions(options))
                }}>是否禁用</Checkbox>
                <p style={{fontSize: 12 + 'px', color: 'red'}}>注：一旦设置，禁止修改</p>
            </Form.Item>

        </Form>
    );
};

export default App;