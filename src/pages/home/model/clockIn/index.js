import React, { useState } from 'react';
import Checkbox from '../../../../components/checkbox/index';
import Raido from '../../../../components/radio/index';
import DatePicker from '../../../../components/datepicker/index';
import Picture from '../../../../components/picture/index';
import DatePicker from '../../../../components/datePicker/index';


function clockIn() {
  const [componentDisabled, setComponentDisabled] = useState(true);

  const onFormLayoutChange = ({ disabled }) => {
    setComponentDisabled(disabled);
  };

  return (
    <>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        onValuesChange={onFormLayoutChange}
        disabled={componentDisabled}
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
            <Radio value="leaveSchool"> 校内集中隔离 </Radio>
            <Radio value="leaveSchool"> 居家隔离 </Radio>
            <Radio value="leaveSchool"> 集中隔离 </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item label="您最近一次的核算检测状况">
          <DatePicker />
        </Form.Item>

        <Form.Item label="您核酸检测的结果">
          <Radio.Group>
            <Radio value="noIsolation">阴性 </Radio>
            <Radio value="leaveSchool">阳性 </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item label="请上传您最近一次核酸检测结果的图片">
          <Picture></Picture>
        </Form.Item>

      </Form>
    </>
  );
}

export default clockIn;