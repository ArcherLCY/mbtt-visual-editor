import React from 'react';
import { useDispatch } from 'react-redux';
import { changeId } from '../../pages/home/slice'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, Form } from 'antd';
const { Meta } = Card;
function App(options) {
  const dispatch = useDispatch()
  return (
    <div className='cardIndex'>
      <Form layout="vertical">
        <Form.Item>
          <Card
            style={{
              width: options.options?.width||"50%",
            }}
            cover={
              <img
                alt="example"
                src={options.options?.backgroundUrl||"https://joeschmoe.io/api/v1/random"}
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={
              <Avatar 
              src={options.options?.userUrl||"https://joeschmoe.io/api/v1/random"} 
              />}

              title={options.options?.title || "多行文字"}
              required={options.options?.checked}
              style={{
                fontWeight: 500,
                fontFamily: '微软雅黑',
                fontSize: options.options?.fontSize,
              }}
              description={options.options?.description || "description"}
              onClick={() => {
                console.log(options);
                dispatch(changeId(options.options))
              }}

            />
          </Card>
        </Form.Item>
      </Form>
    </div>


  )
}


export default App;