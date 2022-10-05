import {
  Form
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

      <Form.Item label="布局" >
        <button
          onClick={(e) => {
            // 居左
            options.justifyContent = 'start';
            console.log(options);
            dispatch(changeOptions(options))
          }}>居左</button>
        <button
          onClick={(e) => {
            // 居中
            options.justifyContent = 'center'
            console.log(options);
            dispatch(changeOptions(options))
          }}>居中</button>
        <button
          onClick={(e) => {
            // 居右
            options.justifyContent = 'end';
            console.log(options);
            dispatch(changeOptions(options))
          }}>居右</button>
      </Form.Item>

    </Form>
  );
};
export default App;