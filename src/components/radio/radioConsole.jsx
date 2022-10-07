import { useDispatch } from 'react-redux';
import { changeOptions } from '../../pages/home/slice'
import {
  Form,
  Checkbox,
  Input,
  Button,
} from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';

// 设置一个计数器
let count = 0;

const App = (data) => {

  let options = { ...data.options }
  // 此时options是一个props组成的对象

  const dispatch = useDispatch();

  // 保存每一个input的值
  let inputValues = [];

  // 添加input回调
  function addInput() {
    options.text = [...options.text, '默认' + (count++)];
    dispatch(changeOptions(options));
  }

  // 确认输入值回调
  function confirmValue() {
    console.log(inputValues);
    options.text = inputValues;
    dispatch(changeOptions(options));
  }

  return (
    <div className="radioIndexConsole">
      <Form layout="vertical"
        style={{
          fontWeight: 700,
          fontFamily: '微软雅黑',
        }}
      >
        <Form.Item label="单选框文本">
          {
            options.text.slice().map((item, index) => {
              return (
                <Input
                  onBlur={(e) => {
                    inputValues[index] = e.target.value;
                  }}
                  placeholder="修改文字"
                  key={index}
                  suffix={
                    <InfoCircleOutlined
                      style={{
                        color: 'rgba(0,0,0,.45)',
                      }}
                    />
                  }
                />
              )
            })
          }
          <Button onClick={addInput}>添加</Button>
          <Button onClick={confirmValue}>确认</Button>
        </Form.Item>
    </Form>
      <Form.Item>
          <Checkbox onChange={(e) => {
            options.autoFocus = e.target.checked
            dispatch(changeOptions(options))
          }}>自动获取焦点</Checkbox>
      </Form.Item>

        {/* <Form.Item>
        <Checkbox onChange={(e) => {
          options.defaultChecked = e.target.checked
          dispatch(changeOptions(options))
        }}>指定当前是否选中</Checkbox>
      </Form.Item> */}

        <Form.Item>
          <Checkbox onChange={(e) => {
            options.disabled = e.target.checked
            dispatch(changeOptions(options))
          }}>是否禁用</Checkbox>
        </Form.Item>
    </div>
  );
};

export default App;