import React from 'react';
import { Card, Col, Row, Image, Button, Popover } from 'antd';
import { LeftOutlined } from '@ant-design/icons';

import './headerStyle.css';

function Header() {
  // 定义模板市场浮窗内容
  const modelMarket = (
    <div>
      <Row gutter={16}>
        <Col span={8}>
          <h2>疫情打卡模板</h2>
        </Col>
        <Col span={8}>
          <h2>疫情打卡模板</h2>
        </Col>
        <Col span={8}>
          <h2>疫情打卡模板</h2>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={8}>
          <Image
            width={150}
            placeholder={true}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
        </Col>
        <Col span={8}>
          <Image
            width={150}
            placeholder={true}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
        </Col>
        <Col span={8}>
          <Image
            width={150}
            placeholder={true}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={8}><Button>应用模板</Button></Col>
        <Col span={8}><Button>应用模板</Button></Col>
        <Col span={8}><Button>应用模板</Button></Col>
      </Row>
    </div>
  );

  return (
    <div className="Header">
      <Card hoverable bordered='true'>
        <LeftOutlined />
        未命名应用
        表单设计
        <Popover content={modelMarket}>
          <Button>模板市场</Button>
        </Popover>
      </Card>
    </div>
  );
}

export default Header;
