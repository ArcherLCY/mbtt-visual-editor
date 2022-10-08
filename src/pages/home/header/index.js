import React from 'react';
import { Card, Col, Row, Image, Button, Popover } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import Display from './compontents/display'
import ContentSizeEdit from './compontents/ContentSizeEdit'
import IsEdit from './compontents/IsEdit'

import styles from './index.module.scss';
import './headerStyle.css';

function Header() {

  return (
    <Card hoverable className={styles.header_card}>
      <div className={styles.header}>
        <div>
          <LeftOutlined />
          <span style={{ marginLeft: 10 + 'px' }}>未命名应用 自由表单设计</span>
        </div>
        <div className={styles.header_right}>
        
          {/* 辑和预览切换的组件 */}
          <IsEdit />
          {/* 操作按钮 */}
          <Display />
          {/* 配置面板 */}
          <ContentSizeEdit />
      
        </div>
      </div>
    </Card>
  );
}

export default Header;