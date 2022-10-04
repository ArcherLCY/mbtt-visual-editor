import { useSelector } from 'react-redux';

import Card from '../../../components/card/index';
import Button from '../../../components/button/index';
import Radio from '../../../components/radio/index';
import Text from '../../../components/text/index';
import Calendar from '../../../components/calendar/index';
import UpLoad from '../../../components/upload/index';

import './contentStyle.scss'

function renderDomList(domList) {
  return domList.map((item) => {
    switch (item.type) {
      case 'Card': return <Card options={item} key={item.id}></Card>
      case 'Button': return <Button options={item} key={item.id}></Button>
      case 'Radio': return <Radio options={item} key={item.id}></Radio>
      case 'Text': return <Text options={item} key={item.id}></Text>
      case 'Calendar': return <Calendar options={item} key={item.id} />
      case 'UpLoad': return <UpLoad options={item} key={item.id} />
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
