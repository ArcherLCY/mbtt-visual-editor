import { useDispatch } from 'react-redux';
import { changeOptions } from '../../pages/home/slice'
import {
  Form,
  Select,
  Button,
  Input,
  Checkbox
} from 'antd';
import { FontColorsOutlined, MailOutlined, PhoneOutlined, SmileOutlined, PictureOutlined, PaperClipOutlined, WalletOutlined, AppstoreAddOutlined, ScheduleOutlined } from '@ant-design/icons';
const App = (data) => {
  const dispatch = useDispatch()
  const ButtonGroup = Button.Group;
  let options = { ...data.options }
  return (
    <div className="rateConsole">

      <h2 className='title'>
        <SmileOutlined /> 评分</h2>

        <Form layout="vertical"
            className='formStyle'>
        {/*标题 */}
        <Form.Item label="标题">
          <Input
            placeholder="请输入标题"
            onChange={(e) => {
              options.title = e.target.value;
              console.log(options);
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
        <Form.Item label="布局" >
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
  );
};
export default App;