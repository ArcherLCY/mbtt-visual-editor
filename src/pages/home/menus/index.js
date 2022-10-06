import { useDispatch } from 'react-redux'
import { increment } from '../slice'
import './menuStyle.css'
import {Button} from 'antd'
import beseMenu from '../../../api/menuData/baseMenu'
import mediaMenu from '../../../api/menuData/mediaMenu'

function Menu() {
    const dispatch = useDispatch()

    const dragStart = (e, option) => {
        option.id = Date.parse(new Date())
        e.dataTransfer.setData('option', JSON.stringify(option))
    }

    return (
        <div className="Menu">
            <h2>基础组件</h2>
            <div className='Menu-list'>   
                {
                    beseMenu.map((item, index) => {
                        return (
                            <div className='Menu-item' key={index}>
                                <Button key={index}
                                    style={{width: 100 + 'px'}}
                                    onClick={() => {
                                        item.id =Date.parse(new Date())  
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
            <div style={{ height: '10000px' }} className='Menu-list'>
                {
                    mediaMenu.map((item, index) => {
                        // const id = 
                        return (
                            <div className='Menu-item' key={index}>
                                <Button key={index}
                                    style={{width: 100 + 'px'}}
                                    onClick={() => dispatch(increment({ 
                                        type: item.type || '', 
                                        id: Date.parse(new Date()), 
                                        value: item.value, 
                                        size: item.size || '',
                                        title: item.title || '',
                                        style: item.style || '',
                                        text: item.text || ''
                                    }))}
                                    onDragStart={(e) => dragStart(e, Date.parse(new Date()), item.type)}
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
