import { useDispatch } from 'react-redux';
import { changeOptions } from '../../pages/home/slice'
import {
  Form,
  Radio
} from 'antd';

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

  return (
    <Form
      layout="vertical"
    >
      <Form.Item label="选择模式">
        <Radio.Group
          options={chooseMode}
          onChange={(e) => {
            options.hasRange = e.target.value;
            dispatch(changeOptions(options))
          }}
          optionType="button" />
      </Form.Item>

      <Form.Item label="是否允许选择时间">
        <Radio.Group
          options={isAllow}
          onChange={(e) => {
            options.showTime = e.target.value;
            dispatch(changeOptions(options))
          }}
          optionType="button" />
      </Form.Item>

    </Form>
  );
};

export default App;