
import Card from '../../../components/card/index'
import Button from '../../../components/button/index'
import Radio from '../../../components/radio/index'
import Checkbox from '../../../components/checkbox/index'
import Text from '../../../components/text/index'
import Switch from '../../../components/switch/index'

// import useDrag from '../../../hooks/useDrag'
import { useSelector, useDispatch } from 'react-redux'
import { changeId } from '../slice'
import styles from './contentStyle.module.scss'


// 根据传入的type识别并返回自定义的antd的组件
function typeToAntd(dom) {
  const type = dom.type.toLowerCase()
  switch (type) {
    case 'card': return <Card options={dom} key={dom.id}></Card>
    case 'text': return <Text options={dom} key={dom.id}></Text>
    case 'button': return <Button options={dom} key={dom.id}>button</Button>
    case 'radio': return <Radio options={dom} key={dom.id}></Radio>
    case 'checkbox': return <Checkbox options={dom} key={dom.id}></Checkbox>
    case 'switch': return <Switch options={dom} key={dom.id}></Switch>
    default: return null
  }
}

// 开始拖拽
const handler_dragStart = (e, id) => {
  console.log(e, id);
  // dataTransfer传输被拖动的数据
  e.dataTransfer.setData('compontent/id', id)
  e.dataTransfer.setData('compontent/type', 'card')
  // e.stopPropagation() //阻止冒泡
}

const handler_dragOver = (e) => {
  e.preventDefault()
}

// 结束拖拽
const handler_dragEnd = (e) => {
  e.preventDefault()
  e.stopPropagation()
  console.log('onDragEnd', e.dataTransfer);
  const id = e.dataTransfer.getData('id')
  const type = e.dataTransfer.getData('type')
  console.log('id', id, type);
}

// 可编辑的dom树，可对组件属性编辑
function Compontent(domList, domId) {
  const dispatch = useDispatch()
  return domList.map((item, index) => {
    return  (
      <div key={item.id} className={styles.editBox + (domId === item.id ? ' ' + styles.selectBox: '')}
      onClick={() => { dispatch(changeId(item))}}
      draggable
      onDragStart={(e) => {handler_dragStart(e, item.id) }}
      onDragOver = {(e) => handler_dragOver(e)}
      onDragEnd={(e) => {handler_dragEnd(e)}}
      >
        {
          typeToAntd(item)
        }
      </div>
    )
  })
}

// 预览的dom树，可使用组件功能
function PreCompontent(domList, domId) {
  return domList.map((item, index) => {
    return typeToAntd(item)
  })
}


function Content() {
  const domList = useSelector((state) => state.home.domList)
  const domId = useSelector((state) => state.home.domId)
  const contentSize = useSelector((state) => state.home.contentSize)
  const isEdit = useSelector((state) => state.home.isEdit)

  // 使用hooks封装拖拽功能
  // useDrag({ 
  //   dragger: styles.editBox, 
  //   draggerBox: styles.editBox, 
  //   container: styles.content, 
  //   maring: [10, 10, 10, 10]
  // })
  
  return (
    <div className={styles.content}>
        <div style={{width: contentSize.width, height: contentSize.height}} className="hahaha">
        {
          isEdit ? Compontent(domList, domId) : PreCompontent(domList, domId)      
        }
        </div>
    </div>
  );
}

export default Content;
