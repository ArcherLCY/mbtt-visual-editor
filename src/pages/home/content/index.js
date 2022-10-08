import Card from '../../../components/card/index'
import Button from '../../../components/button/index'
import Rate from '../../../components/rate/index'
import Picture from '../../../components/picture/index'
import Textarea from '../../../components/textarea/index'
import Contents from '../../../components/content/index'
import Switch from '../../../components/switch/index'
import Text from '../../../components/text/index'
import Radio from '../../../components/radio/index'
import Checkbox from '../../../components/checkbox/index'
import Resume from '../../../components/resume/index'

import { useSelector } from 'react-redux'
import './contentStyle.module.scss'


// 查询新添加组件的类型 并返回 新组件
function renderDomList(domList) {
  // 遍历每一个action，
  // 将他们的id作为标签的key属性
  // 将用户设置的 action 直接作为标签的options属性
  return domList.map((item) => {
    //通过switch判断组件的类型
    // 返回 对应的HTML标签
    switch (item.type) {

      case 'Card': return <Card options={item} key={item.id}></Card>
      case 'Text': return <Text options={item} key={item.id}></Text>
      case 'Rate': return <Rate options={item} key={item.id}></Rate>
      case 'Radio': return <Radio options={item} key={item.id}></Radio>
      case 'Switch': return <Switch options={item} key={item.id}></Switch>
      case 'Button': return <Button options={item} key={item.id}></Button>
      case 'Content': return <Contents options={item} key={item.id}></Contents>
      case 'Picture': return <Picture options={item} key={item.id}></Picture>
      case 'Textarea': return <Textarea options={item} key={item.id}></Textarea>
      case 'Checkbox': return <Checkbox options={item} key={item.id}></Checkbox>
      case 'DatePicker': return <DatePicker options={item} key={item.id}></DatePicker>

      default: return null
    }
  })
}

function Content() {
  // 存放组件action的domList
  const domList = useSelector((state) => state.home.domList)
  // 将domLIst传入renderDomList函数
  // 将函数返回的HTML标签渲染到中间画布当中
  return (
    <div className="Content">
      <div>
        {renderDomList(domList)}
      </div>
    </div>
  );
}

export default Content;
