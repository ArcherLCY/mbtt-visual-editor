<<<<<<< HEAD
import { useSelector } from 'react-redux';

import Card from '../../../components/card/index';
import Button from '../../../components/button/index';
import Radio from '../../../components/radio/index';
import Text from '../../../components/text/index';
import Calendar from '../../../components/calendar/index';
import UpLoad from '../../../components/upload/index';

=======
import Card from '../../../components/card/index'
import Button from '../../../components/button/index'
<<<<<<< HEAD
import Radio from '../../../components/radio/index'
import Checkbox from '../../../components/checkbox/index'
import Text from '../../../components/text/index'
import Switch from '../../../components/switch/index'
=======
>>>>>>> d13daf9a5aa2c24a0a69e64e97412054689551af
import { useSelector } from 'react-redux'
>>>>>>> 5b8b420f96c84f6050adcb8a6904de948730e903
import './contentStyle.scss'

function renderDomList(domList) {
  return domList.map((item) => {
<<<<<<< HEAD
    switch (item.type) {
      case 'Card': return <Card options={item} key={item.id}></Card>
      case 'Button': return <Button options={item} key={item.id}></Button>
      case 'Checkbox': return <Checkbox options={item} key={item.id}></Checkbox>
      case 'Radio': return <Radio options={item} key={item.id}></Radio>
      case 'Text': return <Text options={item} key={item.id}></Text>
<<<<<<< HEAD
      case 'Calendar': return <Calendar options={item} key={item.id} />
      case 'UpLoad': return <UpLoad options={item} key={item.id} />
=======
      case 'Switch': return <Switch options={item} key={item.id}></Switch>
=======
    console.log(item);
    switch (item.type) {
      case 'Card': return <Card options={item} key={item.id}></Card>
      case 'Button': return <Button options={item} key={item.id}></Button>
>>>>>>> d13daf9a5aa2c24a0a69e64e97412054689551af
>>>>>>> 5b8b420f96c84f6050adcb8a6904de948730e903
      default: return null
    }
  })
}

function Content() {
  const domList = useSelector((state) => state.home.domList)
  return (
    <div className="Content">
<<<<<<< HEAD
      中间内容区
=======
>>>>>>> d13daf9a5aa2c24a0a69e64e97412054689551af
      <div>
        {renderDomList(domList)}
      </div>
    </div>
  );
}

export default Content;
