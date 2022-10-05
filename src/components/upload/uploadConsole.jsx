import { useDispatch } from 'react-redux';
import {
  Form,
  Input,
  Select,
  Checkbox,
} from 'antd';

import { changeOptions } from '../../pages/home/slice';

import "./index.css";

const { Option } = Select;


const App = (data) => {
  let options = { ...data.options }

  const dispatch = useDispatch()

  // 文件类型多选框
  // 文本类型无法得到严格验证,需要在服务端进行验证-MDN
  const fileType = [
    {
      label: '图片',
      value: 'image/*',
    },
    {
      label: '视频',
      value: 'video/*',
    },
    {
      label: '音频',
      value: 'audio/*',
    },
    {
      label: '压缩包',
      value: 'Orange',
    }
  ];

  // 保存地址前缀
  let urlBefore="";
  // 上传地址前缀
  const selectBefore = (
    <Select defaultValue="http://" 
    className="select-before"
    onChange={(value)=>urlBefore=value}
    >
      <Option value="http://">http://</Option>
      <Option value="https://">https://</Option>
    </Select>
  );

  return (
    <Form
      layout="vertical"
    >
      <Form.Item label="接受的文件类型">
        <Checkbox.Group
          options={fileType}
          defaultValue={['图片']}
          onChange={(e) => {
            options.accept = urlBefore+e.target.value;
            dispatch(changeOptions(options))
          }}
        />
      </Form.Item>

      <Form.Item label="上传到的地址">
        <Input 
        addonBefore={selectBefore} 
        placeholder="请输入上传到的地址"
        onBlur={(e) => {
          options.action = selectBefore+e.target.value;
          dispatch(changeOptions(options))
        }}
        />
      </Form.Item>

      <Form.Item label="按钮样式">
        <Select defaultValue="primary" style={{ width: 120 }} onChange={(e) => {
          options.style = e;
          dispatch(changeOptions(options))
        }}>
          <Option value="default">默认</Option>
          <Option value="primary">主要按钮</Option>
          <Option value="ghost">空背景</Option>
          <Option value="dashed">虚线</Option>
          <Option value="link">链接</Option>
          <Option value="danger">危险</Option>
        </Select>
      </Form.Item>
      <Form.Item label="按钮形状">
        <Select defaultValue="default" style={{ width: 120 }} onChange={(e) => {
          options.shape = e;
          dispatch(changeOptions(options))
        }}>
          <Option value="default">默认</Option>
          <Option value="circle">圆形</Option>
          <Option value="round">椭圆</Option>
        </Select>
      </Form.Item>
      <Form.Item label="是否禁止">
        <Checkbox onChange={(e) => {
          options.disabled = e.target.checked;
          dispatch(changeOptions(options))
        }}>点击禁止</Checkbox>
      </Form.Item>
      <Form.Item label="跳转地址">
        <Input onChange={(e) => {
          options.href = e.target.value;
          dispatch(changeOptions(options))
        }} placeholder="输入地址进行链接同样的跳转" />
      </Form.Item>
      <Form.Item label="新建页面" style={{ display: options.href ? 'block' : 'none' }}>
        <Checkbox onChange={(e) => {
          options.target = e.target.checked ? '_blank' : '_self';
          dispatch(changeOptions(options))
        }}>跳转时是否新建页</Checkbox>
      </Form.Item>
    </Form>
  );
};

export default App;