import { useDispatch,useSelector } from 'react-redux';
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

    // 单选框值
    let radioValue = useSelector((state)=>{
        console.log(state);
    })

    function addInput(){
      radioValue.push('')
    }

  return (
    <Form layout="vertical">
      <Form.Item label="单选框文本">
        {
          options.inputValue.map((item, index) => {
            return (
              <Input onChange={(e) => changeInputValue(e, index)} placeholder="修改文字" key={index} value={item.text}/>
            )
          })
        }
        <Button onClick={addInput}>添加</Button>
        {/* <Button onClick={confirmValue}>确认</Button> */}
      </Form.Item>

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

    </Form>
  );
};

export default App;