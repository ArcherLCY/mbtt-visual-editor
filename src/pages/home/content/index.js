import Card from '../../../components/card/index'
import Button from '../../../components/button/index'
import Rate from '../../../components/rate/index'
import { useSelector } from 'react-redux'
import './contentStyle.scss'


// 查询新添加组件的类型 并返回 新组件
function renderDomList(domList) {
  // 遍历每一个action，
  // 将他们的id作为标签的key属性
  // 将用户设置的 action 直接作为标签的options属性
  return domList.map((item) => {
    console.log(item);
    //通过switch判断组件的类型
    // 返回 对应的HTML标签
    switch (item.type) {

      case 'Card': return <Card options={item} key={item.id}></Card>
      case 'Button': return <Button options={item} key={item.id}></Button>
      case 'Rate': return <Rate options={item} key={item.id}></Rate>

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
      中间内容区
      <div>
        {renderDomList(domList)}
      </div>
    </div>
  );
}

export default Content;
