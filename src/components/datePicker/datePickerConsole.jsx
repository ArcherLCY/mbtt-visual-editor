import { useDispatch } from 'react-redux';
import { changeOptions } from '../../pages/home/slice'
import {
  Form,
  Radio,
  Input,
  Checkbox
} from 'antd';
import {  ScheduleOutlined } from '@ant-design/icons';

const chooseMode = [
  { label: '普通模式', value: 'DatePicker' },
  { label: '范围模式', value: 'RangePicker' }
];

const isAllow = [
  { label: '是', value: true },
  { label: '否', value: false }
];

const App = (data) => {
  let options = { ...data.options };

  const dispatch = useDispatch();
  const RadioGroup = Radio.Group;
  const RadioButton = Radio.Button;
  return (
    <div className="dateIndexConsole">
      <h2
          className='title'
      ><ScheduleOutlined /> 日期</h2>
      <Form layout="vertical"
            className='formStyle'>
        <Form.Item label="选择模式">
          <Radio.Group
            style={{
              fontWeight: 400,
            }}
            options={chooseMode}
            onChange={(e) => {
              options.hasRange = e.target.value;
              dispatch(changeOptions(options))
            }}
            optionType="button" />
        </Form.Item>
        <Form.Item label="标题">
          <Input
            placeholder="请输入标题"
            className='title'
            onChange={(e) => {
              options.title = e.target.value; console.log(options);
              dispatch(changeOptions(options))
            }} />
        </Form.Item>
        <Form.Item label="提示">
          <Input
            placeholder="请输入提示"
            className='tips'
            onChange={(e) => {
              options.tips = e.target.value; console.log(options);
              dispatch(changeOptions(options))
            }} />
        </Form.Item>
        <Form.Item label="输入框默认提示">
          <Input
            placeholder="请在此输入提示文字"
            onChange={(e) => {
              options.placeholder = e.target.value;
              dispatch(changeOptions(options));
            }}
          />
        </Form.Item>
        <Form.Item label="所占字段%">
          <RadioGroup
            defaultValue="d"
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

        <Form.Item label="是否允许选择时间">
          <Radio.Group
            style={{
              fontWeight: 400,
            }}
            options={isAllow}
            onChange={(e) => {
              options.showTime = e.target.value;
              dispatch(changeOptions(options))
            }}
            optionType="button" />
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