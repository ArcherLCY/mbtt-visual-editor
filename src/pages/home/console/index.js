import { Input } from 'antd';
import './consoleStyle.css'

function Console() {
    return (
      <div className="Console">
        右侧控制台
        <Input placeholder="Basic usage" onChange={(value)=>{
            console.log(value)
        }} />
      </div>
    );
  }
  
  export default Console;
  