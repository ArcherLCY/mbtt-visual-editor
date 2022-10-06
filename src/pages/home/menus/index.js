import { useDispatch } from 'react-redux'
import { increment } from '../slice'
import './menuStyle.css'
import {Button} from 'antd'
import beseMenu from '../../../api/menuData/baseMenu'
import mediaMenu from '../../../api/menuData/mediaMenu'

function Menu() {
    const dispatch = useDispatch()

    const handler_dragStart = (e, id, type) => {
        console.log(e,id,type);
    }
    return (
        <div className="Menu">
            <h2>基础组件</h2>
            <div className='Menu-list'>   
                {
                    beseMenu.map((item, index) => {
                        const id = Date.parse(new Date())
                        return (
                            <div className='Menu-item' key={index}>
                                <Button key={index}
                                    style={{width: 100 + 'px'}}
                                    onClick={() => dispatch(increment({ 
                                        type: item.type || '', 
                                        id: id, 
                                        value: item.value, 
                                        size: item.size || '',
                                        title: item.title || '',
                                        style: item.style || '',
                                        text: item.text || ''
                                    }))}
                                    onDragStart={(e) => handler_dragStart(e, id, item.type)}
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
                        const id = Date.parse(new Date())
                        return (
                            <div className='Menu-item' key={index}>
                                <Button key={index}
                                    style={{width: 100 + 'px'}}
                                    onClick={() => dispatch(increment({ 
                                        type: item.type || '', 
                                        id: id, 
                                        value: item.value, 
                                        size: item.size || '',
                                        title: item.title || '',
                                        style: item.style || '',
                                        text: item.text || ''
                                    }))}
                                    onDragStart={(e) => handler_dragStart(e, id, item.type)}
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
