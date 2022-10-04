<<<<<<< HEAD
import './headerStyle.css'
import { Card } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
=======
import './headerStyle.scss'
import {LeftOutlined} from '@ant-design/icons';
>>>>>>> d13daf9a5aa2c24a0a69e64e97412054689551af

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
