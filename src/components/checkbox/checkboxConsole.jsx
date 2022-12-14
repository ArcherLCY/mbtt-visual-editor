import { useDispatch } from 'react-redux';
import { changeOptions } from '../../pages/home/slice'
import {
  Form,
  Checkbox,
  Input,
  Button
} from 'antd';

// 设置一个计数器
let count = 0;

const App = (data) => {

  let options = { ...data.options }

  const dispatch = useDispatch();

  // 复制一份text值
  let copyText = [...options.inputValue];

  // 添加input回调
  function addInput() {
    options.inputValue = [...options.inputValue, '默认' + (count++)];
    copyText= options.inputValue;
    dispatch(changeOptions(options));
  }

  return (
    <Form layout="vertical">

      <Form.Item label="标题">
        <Input onChange={(e) => {
          options.title = e.target.value;
          dispatch(changeOptions(options));
        }} 
        placeholder="请输入标题"
        />
      </Form.Item>

      <Form.Item label="提示">
        <Input onChange={(e) => {
          options.tooltip = e.target.value;
          dispatch(changeOptions(options));
        }} 
        placeholder="请输入提示"
        />
      </Form.Item>

      <Form.Item label="复选框文本">
        {
          copyText.map((item, index) => {
            return (
              <Input
                onChange={(e) => {
                  copyText[index] = e.target.value;
                  options.inputValue = [...copyText];
                  dispatch(changeOptions(options));
                }}
                placeholder="修改文字"
                key={index}
              />

            )
          })
        }
        <Button onClick={addInput}>添加</Button>
      </Form.Item>

      <Form.Item>
        <Checkbox onChange={(e) => {
          options.autoFocus = e.target.checked
          dispatch(changeOptions(options))
        }}>自动获取焦点</Checkbox>
      </Form.Item>

      <Form.Item>
        <Checkbox onChange={(e) => {
          options.disabled = e.target.checked
          dispatch(changeOptions(options))
        }}>是否禁用</Checkbox>
      </Form.Item>

    </Form>
  );
};

export default App;