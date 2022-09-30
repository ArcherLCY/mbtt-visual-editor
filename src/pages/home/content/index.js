import { Card } from 'antd'
import { useSelector } from 'react-redux'
import './contentStyle.scss'

function Content() {
  const domList = useSelector((state) => state.home.domList)
  return (
    <div className="Content">

      中间内容区
      <div>
        {domList.map((item, index) => {
          return <Card onClick={()=>{console.log('123')}} key={Date.now() + index}
          >{item.type}</Card>
        })}
      </div>


    </div>
  );
}

export default Content;
