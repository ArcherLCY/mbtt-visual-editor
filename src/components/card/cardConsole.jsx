import {
    Form,
    Input,
    Radio,
} from 'antd';
import { WalletOutlined, } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { changeOptions } from '../../pages/home/slice'
import '../../pages/home/console/consoleStyle.css'

const App = (data) => {
    const RadioGroup = Radio.Group;
    const RadioButton = Radio.Button;
    const dispatch = useDispatch()
    let options = { ...data.options }
    return (
        <div className='cardConsole'>
            <h2 className='title'><WalletOutlined /> 卡片</h2>

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
                {/* 描述 */}
                <Form.Item label="描述">
                    <Input
                        placeholder="请输入描述"
                        className='tips'
                        onChange={(e) => {
                            options.description = e.target.value; console.log(options);
                            dispatch(changeOptions(options))
                        }} />
                </Form.Item>
                {/* 背景图片URL */}
                <Form.Item label="背景图片URL">
                    <Input
                        placeholder="请输入背景图片URL"
                        onChange={(e) => {
                            options.backgroundUrl = e.target.value; console.log(options);
                            dispatch(changeOptions(options))
                        }} />
                </Form.Item>
                {/* 头像图片URL */}
                <Form.Item label="头像图片URL">
                    <Input
                        placeholder="请输入头像图片URL"
                        onChange={(e) => {
                            options.userUrl = e.target.value; console.log(options);
                            dispatch(changeOptions(options))
                        }} />
                </Form.Item>
                <Form.Item label="所占字段">
                    <RadioGroup
                        defaultValue="b"
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
        </div >
    );
};

export default App;