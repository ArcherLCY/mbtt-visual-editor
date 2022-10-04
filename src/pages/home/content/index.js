import Card from '../../../components/card/index'
import Content_input from '../../../components/content/index'
import Img from '../../../components/picture/index_'
import Input from '../../../components/textarea'
import Src from '../../../components/src/index'
import { useSelector } from 'react-redux'
import './contentStyle.css'

function renderDomList(domList) {
  return domList.map((item) => {
    console.log(item);
    switch (item.type) {
      case 'Card': return <Card options={item} key={item.id}></Card>
      case 'input': return <Content_input options={item} key={item.id} />
      case 'textarea': return <Input options={item} key={item.id} />
      case 'picture': return <Img options={item} key={item.id} className={'pictureList'} />
      case 'src': return <Src options={item} key={item.id} />
      default: return null
    }
  })
}

function Content() {
  const domList = useSelector((state) => state.home.domList)
  return (
    <div  className="Content">     
        {renderDomList(domList)}
    </div>
  );
}

export default Content;
