import {
  Form,
  Radio
} from 'antd';
// import moment from 'moment';
import { useDispatch } from 'react-redux';

import { changeOptions } from '../../pages/home/slice'


// 年模式或月模式
const modeMonthOrYear = [
  { label: 'Month', value: 'month' },
  { label: 'Year', value: 'year' }
];

// 是否全屏模式
const isFullScreen = [
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
      <Form.Item label="初始模式">
        <Radio.Group
          options={modeMonthOrYear}
          onChange={(e) => {
            options.mode = e.target.value;
            dispatch(changeOptions(options))
          }}
          optionType="button" />
      </Form.Item>

      <Form.Item label="是否全屏显示">
        <Radio.Group
          options={isFullScreen}
          onChange={(e) => {
            options.fullscreen = e.target.value;
            dispatch(changeOptions(options))
          }}
          optionType="button"
        />
      </Form.Item>

    </Form>
  );
};

export default App;