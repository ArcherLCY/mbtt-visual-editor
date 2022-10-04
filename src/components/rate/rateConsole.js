import {
  Form, Input
} from 'antd';
import { useDispatch } from 'react-redux';
import { changeOptions } from '../../pages/home/slice'
const App = (data) => {
  const dispatch = useDispatch()
  let options = { ...data.options }
  return (
    <Form
      labelCol={{
        div: 5,
      }}
      wrapperCol={{
        div: 14,
      }}
      layout="horizontal"
      initialValues={{
        size: 'small',
      }}
      size='small'>
      <Form.Item label="Title" >
        <Input
          onChange={(e) => {
            options.title = e.target.value;
            console.log(options);
            dispatch(changeOptions(options))
          }} />
      </Form.Item>
      <Form.Item label="布局" >
        <button onClick={(e) => { 
            // 居左
            options.margin='0';
            console.log(options);
            dispatch(changeOptions(options))
          }}>居左</button>
          <button onClick={(e) => {
            // 居中
            options.margin='0% 35%';
            console.log(options);
            dispatch(changeOptions(options))
          }}>居中</button>
          <button onClick={(e) => {
            // 居右
            options.margin='0 %';
            console.log(options);
            dispatch(changeOptions(options))
          }}>居右</button>
      </Form.Item>
     
    </Form>
  );
};
export default App;