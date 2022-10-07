
import Card from '../../../components/card/index'
import Button from '../../../components/button/index'
import Rate from '../../../components/rate/index'
import Picture from '../../../components/picture/index_'
import Textarea from '../../../components/textarea/index'
import Contents from '../../../components/content/index'
import Switch from '../../../components/switch/index'
import Text from '../../../components/text/index'
import Radio from '../../../components/radio/index'
import Checkbox from '../../../components/checkbox/index'
import Link from '../../../components/link/index'
import Date from '../../../components/datePicker/index'

import { useSelector, useDispatch } from 'react-redux'
import { changeId } from '../slice'
import styles from './contentStyle.module.scss'


// 根据传入的type识别并返回antd的组件
function typeToAntd(dom) {
  const type = dom.type.toLowerCase()
  switch (type) {
    case 'card': return <Card options={dom} key={dom.id}></Card>
    case 'text': return <Text options={dom} key={dom.id}></Text>
    case 'link': return <Link options={dom} key={dom.id}></Link>
    case 'date': return <Date options={dom} key={dom.id}></Date>
    case 'rate': return <Rate options={dom} key={dom.id}></Rate>
    case 'radio': return <Radio options={dom} key={dom.id}></Radio>
    case 'switch': return <Switch options={dom} key={dom.id}></Switch>
    case 'button': return <Button options={dom} key={dom.id}>button</Button>
    case 'content': return <Contents options={dom} key={dom.id}></Contents>
    case 'picture': return <Picture options={dom} key={dom.id}></Picture>
    case 'checkbox': return <Checkbox options={dom} key={dom.id}></Checkbox>
    case 'textarea': return <Textarea options={dom} key={dom.id}></Textarea>
    default: return null
  }
}

// 可编辑的dom树，生成线性
function Compontent(domList, domId) {
  const dispatch = useDispatch()
  return domList.map((item, index) => {
    return  (
      <div key={item.id} className={styles.editBox + (domId === item.id ? ' ' + styles.selectBox: '')}
      onClick={() => { dispatch(changeId(item))}}
      >
        {
          typeToAntd(item)
        }
      </div>
    )
  })
}

function PreCompontent(domList, domId) {
  return domList.map((item, index) => {
    return typeToAntd(item)
  })
}


function Content() {
  // 存放组件action的domList
  const domList = useSelector((state) => state.home.domList)
  const domId = useSelector((state) => state.home.domId)
  const contentSize = useSelector((state) => state.home.contentSize)
  const isEdit = useSelector((state) => state.home.isEdit)

  return (
    <div className={styles.content}>
      <div style={{width: contentSize.width, height: contentSize.height}}>
        {
          isEdit ? Compontent(domList, domId) : PreCompontent(domList, domId)      
        }
      </div>
    </div>
  );
}

export default Content;
