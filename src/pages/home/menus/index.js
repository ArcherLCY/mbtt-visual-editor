import { useDispatch } from 'react-redux'
import { nanoid } from 'nanoid';
import { increment } from '../slice'
import styles from './index.module.scss'
import {Button} from 'antd'
import beseMenu from '../../../api/menuData/baseMenu'
import mediaMenu from '../../../api/menuData/mediaMenu'

function Menu() {
  const dispatch = useDispatch()
  return (
    <div className="Menu">
      <h2>基础组件</h2>
      <div className='Menu-list'>


    // 开启拖拽
    const dragStart = (e, option) => {
        option.id = nanoid()
        e.dataTransfer.setData('option', JSON.stringify(option))
    }

        <button onClick={() => dispatch(increment({ type: 'Button', id: Date.parse(new Date()), style: 'primary', value: '主要按钮' }))}>
          <AppstoreAddOutlined />
          <span>按钮</span>
        </button>

        <button onClick={() => dispatch(increment({ type: 'Switch', id: Date.parse(new Date()), text: '开关' }))}>
          <FontColorsOutlined />
          <span>开关</span>
        </button>

        <button onClick={() => dispatch(increment({ type: 'Text', id: Date.parse(new Date()), value: '单行文本' }))}>
          <FontColorsOutlined />
          <span>单行文本</span>
        </button>

        <button onClick={() => dispatch(increment({
          type: 'Radio', 
          id: nanoid(),
          inputValue: ['Apple', 'Pear', 'Orange'],
          title:'单项选择',
          tooltip:'tooltip'
        }))}>
          <FontColorsOutlined />
          <span>单选按钮</span>
        </button>

    return (
        <div className={styles.Menu}>
            <h2>基础组件</h2>
            <div className={styles.MenuList}>   
                {
                    beseMenu.map((item, index) => {
                        return (
                            <div className={styles.MenuItem} key={index}>
                                <Button key={index}
                                    onClick={() => { 
                                        let temp = {...item}
                                        getId(temp)
                                    }}
                                    draggable
                                    onDragStart={(e) => dragStart(e, item)}
                                >
                                    {item.text}
                                </Button>
                            </div>
                        )
                    })
                }                    
            </div>
            <h2>高级组件</h2>
            <div className={styles.MenuList}>
                {
                    mediaMenu.map((item, index) => {
                        // const id = 
                        return (
                            <div className={styles.MenuItem} key={index}>
                                <Button key={index}
                                    onClick={() => {
                                        let temp = {...item}
                                        getId(temp)
                                    }}
                                    onDragStart={(e) => dragStart(e, item)}
                                >
                                    {item.text}
                                </Button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Menu;
