import { Card } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import Display from './compontents/display'
import ContentSizeEdit from './compontents/ContentSizeEdit'
import styles from './index.module.scss';

function Header() {
  return (
      <Card hoverable className={styles.header_card}>     
        <div className={styles.header}>
          <div>
            <LeftOutlined />
            未命名应用11111
            自由表单设计
          </div>
          <div className={styles.header_right}>
            <ContentSizeEdit/>
            <Display />
          </div>
        </div>
      </Card>
  );
}

export default Header;
