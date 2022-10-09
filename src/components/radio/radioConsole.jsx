import { useDispatch } from 'react-redux';
import { changeOptions } from '../../pages/home/slice'
import {
  Form,
  Checkbox,
  Input,
  Button
} from 'antd';
import { FontColorsOutlined, } from '@ant-design/icons';

const count = 0
const App = (data) => {

  let options = { ...data.options }
  // 此时options是一个props组成的对象

  console.log(data);

  const dispatch = useDispatch();

  // 复制一份text值
  let copyText = [...options.inputValue];
  console.log("copyText", copyText);

  // 添加input回调
  function addInput() {
    options.inputValue = [...options.inputValue, '默认' + (count++)];
    dispatch(changeOptions(options));
  }

  return (
    <div className="radioConsole">
      <Form layout="vertical"
        className='formStyle'
      >
        <h2 className='title'>
          <FontColorsOutlined /> 按钮</h2>
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

      <Form.Item label="单选框文本">
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
                style={{borderRadius: '5px'}}
              />
            )
          })
        }
        <Button onClick={addInput}>添加</Button>
        {/* <Button onClick={confirmValue}>确认</Button> */}
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
      <Form.Item
        style={{
          fontFamily: '微软雅黑',
        }}
      >
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
    </div>
  );
};

export default App;