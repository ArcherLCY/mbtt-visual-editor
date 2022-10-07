import { useDispatch,useSelector } from 'react-redux';
import { changeOptions } from '../../pages/home/slice'
import {
    Form,
    Checkbox,
    Input,
    Button
} from 'antd';

const App = (data) => {
  console.log(data);
    let options = { ...data.options }
    // 此时options是一个props组成的对象

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
                  options.text.map((item,index)=>{
                    return (
                      <Input onBlur={(e) => {
                        radioValue[index] = e.target.value;
                        dispatch(changeOptions(options))
                    }} placeholder="修改文字" key={index}/>
                    )
                  })
                }
                <Button onClick={addInput}>添加</Button>
                <Button>确认</Button>
            </Form.Item>

            <Form.Item>
                <Checkbox onChange={(e) => {
                    options.autoFocus = e.target.checked
                    dispatch(changeOptions(options))
                }}>自动获取焦点</Checkbox>
            </Form.Item>

            <Form.Item>
                <Checkbox onChange={(e) => {
                    options.defaultChecked = e.target.checked
                    dispatch(changeOptions(options))
                }}>指定当前是否选中</Checkbox>
            </Form.Item>

            <Form.Item>
                <Checkbox onChange={(e) => {
                    options.disabled = e.target.checked
                    dispatch(changeOptions(options))
                }}>是否禁用</Checkbox>
                <p style={{fontSize: 12 + 'px', color: 'red'}}>注：一旦设置，禁止修改</p>
            </Form.Item>

        </Form>
    );
};

export default App;