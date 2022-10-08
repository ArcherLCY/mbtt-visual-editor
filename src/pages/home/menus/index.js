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
        option.id = nanoid()
        e.dataTransfer.setData('option', JSON.stringify(option))
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
                                        console.log(item);
                                        item.id = nanoid() 
                                        console.log(item);
                                        dispatch(increment(item))
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
                                        item.id = nanoid()  
                                        dispatch(increment(item))
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