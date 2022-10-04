import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';

import { changeId } from '../../pages/home/slice'

function App(options) {
  const dispatch = useDispatch()
  const { action,accept,showUploadList,multiple } = options.options;

  // 上传相关配置项
  const props = {
    name: 'file',
    action,
    accept,
    showUploadList,
    multiple,
    headers: {
      authorization: 'authorization-text',
    },
  
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
  
      if (info.file.status === 'done') {
        message.success(`${info.file.name} 上传成功!`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} 上传失败!.`);
      }
    },
  };

  return (
    <Upload {...props}>
      <Button icon={<UploadOutlined />}
        onClick={() => { dispatch(changeId(options.options)) }}
      >点我上传</Button>
    </Upload>
  )
}


export default App;