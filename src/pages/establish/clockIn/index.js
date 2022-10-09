import React from 'react';
import { Form, Checkbox, DatePicker, Upload, Radio } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

function clockIn() {
  let loading = false;

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

  return (
    <>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
      >
        <Form.Item label="您的健康状况" valuePropName="checked">
          <Checkbox.Group
            options={['无异常', '发热', '干咳', '乏力', '咽痛', '其它']}
            defaultValue={['Apple']} />
        </Form.Item>

        <Form.Item label="您是否在校">
          <Radio.Group>
            <Radio value="inSchool">已在学校 </Radio>
            <Radio value="leaveSchool"> 暂缓返校 </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item label="您本人的隔离或健康观察情况">
          <Radio.Group>
            <Radio value="noIsolation">未隔离 </Radio>
            <Radio value="inSchool"> 校内集中隔离 </Radio>
            <Radio value="inHome"> 居家隔离 </Radio>
            <Radio value="all"> 集中隔离 </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item label="您最近一次的核酸检测状况">
          <DatePicker />
        </Form.Item>

        <Form.Item label="您核酸检测的结果">
          <Radio.Group>
            <Radio value="yin">阴性 </Radio>
            <Radio value="yang">阳性 </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item label="请上传您最近一次核酸检测结果的图片">
          <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          >
              {uploadButton}
          </Upload>
        </Form.Item>
      </Form>
    </>
  );
}

export default clockIn;