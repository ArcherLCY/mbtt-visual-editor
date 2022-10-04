import {
    Form,
    Input,
} from 'antd';
import { useDispatch } from 'react-redux';
import { changeOptions } from '../../pages/home/slice'

const App = (data) => {
    const dispatch = useDispatch()
    let options = { ...data.options }
    return (
        <Form
            labelCol={{
                span: 4,
            }}
            wrapperCol={{
                span: 14,
            }}
            layout="horizontal"
            initialValues={{
                size: 'small',
            }}
            size='small'
        >
            <Form.Item label="Title">
                <Input onChange={(e) => {
                    options.title = e.target.value; console.log(options);
                    dispatch(changeOptions(options))
                }} />
            </Form.Item>
        </Form>
    );
};

export default App;