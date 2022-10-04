import Card from '../../../components/card/index'
import Button from '../../../components/button/index'
import Radio from '../../../components/radio/index'
import Checkbox from '../../../components/checkbox/index'
import Text from '../../../components/text/index'
import Switch from '../../../components/switch/index'
import { useSelector } from 'react-redux'
import './contentStyle.scss'

function renderDomList(domList) {
  return domList.map((item) => {
    switch (item.type) {
      case 'Card': return <Card options={item} key={item.id}></Card>
      case 'Button': return <Button options={item} key={item.id}></Button>
      case 'Checkbox': return <Checkbox options={item} key={item.id}></Checkbox>
      case 'Radio': return <Radio options={item} key={item.id}></Radio>
      case 'Text': return <Text options={item} key={item.id}></Text>
      case 'Switch': return <Switch options={item} key={item.id}></Switch>
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
