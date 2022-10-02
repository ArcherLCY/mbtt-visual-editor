import Card from '../../../components/card/index'
import Button from '../../../components/button/index'
import { useSelector } from 'react-redux'
import './contentStyle.scss'

function renderDomList(domList) {
  return domList.map((item) => {
    switch (item.type) {
      case 'Card': return <Card options={item} key={item.id}></Card>
      case 'Button': return <Button options={item} key={item.id}></Button>
      default: return null
    }
  })
}

function Content() {
  const domList = useSelector((state) => state.home.domList)
  return (
    <div className="Content">
      中间内容区
      <div>
        {renderDomList(domList)}
      </div>
    </div>
  );
}

export default Content;
