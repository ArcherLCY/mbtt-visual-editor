import './headerStyle.css'
import { Card } from 'antd';
import { LeftOutlined } from '@ant-design/icons';

function Header() {
  return (
    <div className="Header">
      <Card hoverable bordered='true'>
        <LeftOutlined />
        未命名应用
        表单设计
      </Card>
    </div>
  );
}

export default Header;
