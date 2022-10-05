
import Card from '../../../components/card/index'
import Content_input from '../../../components/content/index'
import Img from '../../../components/picture/index_'
import Input from '../../../components/textarea'
import Src from '../../../components/src/index'
import './contentStyle.css'

// function renderDomList(domList) {
//   return domList.map((item) => {
//     console.log(item);
//     switch (item.type) {
//       case 'Card': return <Card options={item} key={item.id}></Card>
//       case 'input': return <Content_input options={item} key={item.id} />
//       case 'textarea': return <Input options={item} key={item.id} />
//       case 'picture': return <Img options={item} key={item.id} className={'pictureList'} />
//       case 'src': return <Src options={item} key={item.id} />
//     }
//   })
// }
import { useSelector } from 'react-redux';



import Text from '../../../components/text/index';
import Calendar from '../../../components/calendar/index';
import UpLoad from '../../../components/upload/index';
import Button from '../../../components/button/index'
import Radio from '../../../components/radio/index'
import Checkbox from '../../../components/checkbox/index'
import Switch from '../../../components/switch/index'




function renderDomList(domList) {
  return domList.map((item) => {
    switch (item.type) {
      case 'Card': return <Card options={item} key={item.id}></Card>
      case 'Button': return <Button options={item} key={item.id}></Button>
      case 'Checkbox': return <Checkbox options={item} key={item.id}></Checkbox>
      case 'Radio': return <Radio options={item} key={item.id}></Radio>
      case 'Text': return <Text options={item} key={item.id}></Text>
      case 'Calendar': return <Calendar options={item} key={item.id} />
      case 'UpLoad': return <UpLoad options={item} key={item.id} />
      case 'Switch': return <Switch options={item} key={item.id}></Switch>
      case 'input': return <Content_input options={item} key={item.id} />
      case 'textarea': return <Input options={item} key={item.id} />
      case 'picture': return <Img options={item} key={item.id} className={'pictureList'} />
      case 'src': return <Src options={item} key={item.id} />
    }
  })
}

function Content() {
  const domList = useSelector((state) => state.home.domList)
  return (
    <div>
      中间内容区
      <div className="Content">
        {renderDomList(domList)}
      </div>
    </div>
  );
}

export default Content;
