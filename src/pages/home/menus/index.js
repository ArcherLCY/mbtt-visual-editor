import { useDispatch } from 'react-redux'
import { nanoid } from 'nanoid';
import { increment } from '../slice'
import styles from './index.module.scss'
import {Button} from 'antd'
import beseMenu from '../../../api/menuData/baseMenu'
import mediaMenu from '../../../api/menuData/mediaMenu'

function Menu() {
    const dispatch = useDispatch()

    // 开启拖拽
    const dragStart = (e, option) => {
        console.log(option,'213');
        option.id = nanoid()
        e.dataTransfer.setData('option', JSON.stringify(option))
    }
 
    const getId = (option) => {
        option.id = nanoid()
        dispatch(increment(option))
    }

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
        </div>
    );
}

export default Menu;