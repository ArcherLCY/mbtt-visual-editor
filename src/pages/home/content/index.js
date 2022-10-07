
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
import Resume from '../../../components/resume/index'

// import useDrag from '../../../hooks/useDrag'
import { useSelector, useDispatch } from 'react-redux'
import { changeId, increment, incrementByIndex } from '../slice'
import styles from './contentStyle.module.scss'

// 根据传入的type识别并返回自定义的antd的组件
function typeToAntd(dom) {
  const type = dom.type.toLowerCase()
  switch (type) {
    case 'card': return <Card options={dom} key={dom.id}></Card>
    case 'text': return <Text options={dom} key={dom.id}></Text>
    case 'button': return <Button options={dom} key={dom.id}></Button>
    case 'radio': return <Radio options={dom} key={dom.id}></Radio>
    case 'checkbox': return <Checkbox options={dom} key={dom.id}></Checkbox>
    case 'switch': return <Switch options={dom} key={dom.id}></Switch>
    case 'Rate': return <Rate options={dom} key={dom.id}></Rate>
    case 'resume': return <Resume options={dom} key={dom.id}></Resume>
    case 'Textarea': return <Textarea options={dom} key={dom.id}></Textarea>
    case 'Picture': return <Picture options={dom} key={dom.id}></Picture>
    case 'Contents': return <Contents options={dom} key={dom.id}></Contents>
    default: return null
  }
}



// 开始拖拽
const handler_dragStart = (e, id) => {
  console.log('target',e.target);
  // dataTransfer传输被拖动的数据
  e.dataTransfer.setData('compontent/id', id)
  e.dataTransfer.setData('compontent/type', 'card')
  // e.stopPropagation() //阻止冒泡
}




// 可编辑的dom树，可对组件属性编辑
function Compontent(domList, domId) {
  const dispatch = useDispatch()
  return domList.map((item, index) => {
    return  (
      <div key={item.id} 
      className={styles.editBox + (domId === item.id ? ' ' + styles.selectBox: '')}
      id={item.id}
      onClick={() => { dispatch(changeId(item))}}
      draggable
      onDragStart={(e) => {handler_dragStart(e, item.id) }}
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
  // 存放组件action的domList
  const domList = useSelector((state) => state.home.domList)
  const domId = useSelector((state) => state.home.domId)
  const contentSize = useSelector((state) => state.home.contentSize)
  const isEdit = useSelector((state) => state.home.isEdit)

  const dispatch = useDispatch()

  //获取元素的domList中的位置索引
  const _index = (id) => {
    return domList.findIndex(item => {
      return item.id + '' === id
    })
  }

  //结束拖拽
  const drop = (e) => {
    // 获取数据
    let option = e.dataTransfer.getData("option")
    const target = e.target

    // console.log(target.getBoundingClientRect());

    // 存在组件配置项，表示是插入新节点
    if(option) {
      option = JSON.parse(option)//转化为对象配置

      // 存在id，表示该节点为组件节点，需要判定插入位置
      if(!target.id) increment(option)

      //根据索引值插入
      const index =_index(target.id)
      dispatch(index === -1 ? increment(option) : incrementByIndex({index, option}))
    }      
  }
  
  return (
    <div className={styles.content}>
        <div style={{width: contentSize.width, height: contentSize.height}} onDragOver={(e) => e.preventDefault()} onDrop={ drop}> 
        {
          isEdit ? Compontent(domList, domId) : PreCompontent(domList, domId)      
        }
        </div>
    </div>
  );
}

export default Content;
