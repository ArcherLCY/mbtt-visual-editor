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
import DatePicker from '../../../components/datePicker/index'
import Link from '../../../components/link/index'
import Date from '../../../components/datePicker/index'
import Telephone from '../../../components/telephone/index'
import Email from '../../../components/email/index'

// import useDrag from '../../../hooks/useDrag'
import { useSelector, useDispatch } from 'react-redux'
import { changeId, increment, incrementByIndex, moveByIndex } from '../slice'
import styles from './contentStyle.module.scss'

// 根据传入的type识别并返回自定义的antd的组件
function typeToAntd(dom) {
  const type = dom.type.toLowerCase()
  switch (type) {
    case 'card': return <Card options={dom} key={dom.id}></Card>
    case 'text': return <Text options={dom} key={dom.id}></Text>
    case 'button': return <Button options={dom} key={dom.id}></Button>
    case 'link': return <Link options={dom} key={dom.id}></Link>
    case 'date': return <Date options={dom} key={dom.id}></Date>
    case 'rate': return <Rate options={dom} key={dom.id}></Rate>
    case 'radio': return <Radio options={dom} key={dom.id}></Radio>
    case 'email': return <Email options={dom} key={dom.id}></Email>
    case 'switch': return <Switch options={dom} key={dom.id}></Switch>
    case 'Rate': return <Rate options={dom} key={dom.id}></Rate>
    case 'resume': return <Resume options={dom} key={dom.id}></Resume>
    case 'Textarea': return <Textarea options={dom} key={dom.id}></Textarea>
    case 'Picture': return <Picture options={dom} key={dom.id}></Picture>
    case 'content': return <Contents options={dom} key={dom.id}></Contents>
    case 'picture': return <Picture options={dom} key={dom.id}></Picture>
    case 'checkbox': return <Checkbox options={dom} key={dom.id}></Checkbox>
    case 'telephone': return <Telephone options={dom} key={dom.id}></Telephone>
    default: return null
  }
}

// 可编辑的dom树，可对组件属性编辑
function Compontent(domList, domId) {
  const dispatch = useDispatch()

  //获取元素的domList中的位置索引以及option
  const findOption = (id) => {
    let index = 0
    const option = domList.find((item, i) => {
      index = i
      return item.id + '' === id
    })
    return { option, index }
  }

  // 开始拖拽
  const dragStart = (e, id) => {
    // dataTransfer传输被拖动的数据
    e.dataTransfer.setData('id', id)
    e.stopPropagation() //阻止冒泡
  }

  //结束拖拽
  const drop = (e) => {
    let id = e.dataTransfer.getData("id")
    console.log(e.target);

    if (id) {
      // const targetId = e.target.id
      const idData = findOption(id)
      const targetData = findOption(e.target.id)
      const { index: idIndex, option: idOption } = idData
      const { index: targetIndex, option: targetOption } = targetData

      const to = targetOption !== -1 && idOption !== -1 ? targetIndex : idIndex < targetIndex ? domList.length - 2 : domList.length - 1
      dispatch(moveByIndex({ indexFrom: idIndex, indexTo: to, option: idOption }))
    }

  }

  return domList.map((item, index) => {
    return (
        <div key={item.id}
        className={styles.editOuter}
        id={item.id}
        onClick={() => { dispatch(changeId(item)) }}
        draggable
        onDragStart={(e) => { dragStart(e, item.id) }}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => drop(e)}
      >
        <div
          className={styles.editBox + (domId === item.id ? ' ' + styles.selectBox : '')}
          id={item.id}
        >
          {
            typeToAntd(item)
          }
        </div>
      </div>
      
    )
  })
}

// 预览的dom树，可使用组件功能
function PreCompontent(domList, domId) {
  return domList.map((item) => {
    return (
      <div key={item.id} className={styles.preBox}>
        {
          typeToAntd(item)
        }
      </div>
    )
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

    // 存在组件配置项，表示是插入新节点
    if (option) {
      const { target } = e
      option = JSON.parse(option)//转化为对象配置

      // 存在id，表示该节点为组件节点，需要判定插入位置
      if (!target.id) increment(option)

      //根据索引值插入
      const index = _index(target.id)
      dispatch(index === -1 ? increment(option) : incrementByIndex({ index, option }))
    }
  }

  return (
    <div className={styles.content}>
      <div style={{ width: contentSize.width, height: contentSize.height }} onDragOver={(e) => e.preventDefault()} onDrop={drop}>
        {
          isEdit ? Compontent(domList, domId) : PreCompontent(domList, domId)
        }
      </div>
    </div>
  );
}

export default Content;
