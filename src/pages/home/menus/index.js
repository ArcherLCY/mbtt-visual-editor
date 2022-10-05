import { useDispatch } from 'react-redux'
import { increment } from '../slice'
import './menuStyle.scss'
import { Divider } from 'antd'


function Menu() {
    const dispatch = useDispatch()
    return (
        <div className="Menu">
            <Divider><h3>基础字段</h3></Divider>
            {/*点击后 将action信息传入对应组件 */}
            {/* 利用Date生成毫秒的整数作为每个组件单独的Id */}
            <button className='menuButton' onClick={() => dispatch(increment({type:'Card',id:Date.parse(new Date()),size:'small',title:"Write something"}))}>addCard</button>
            <button className='menuButton' onClick={() => dispatch(increment({type:'Button',id:Date.parse(new Date()),size:'small',title:"Write something"}))}>addButton</button>
            <Divider><h3>高级字段</h3></Divider>
            <button onClick={() => dispatch(increment({type:'Rate',id:Date.parse(new Date()),size:'small',title:"Write something"}))}>addRate</button>
            <div style={{height:'10000px'}}>1233</div>
        </div>
    );
}

export default Menu;
