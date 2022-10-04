import { useDispatch } from 'react-redux'
import { increment } from '../slice'
import './menuStyle.scss'
import { Divider } from 'antd'


function Menu() {
    const dispatch = useDispatch()
    return (
        <div className="Menu">
            <Divider><h3>基础字段</h3></Divider>
            <button className='menuButton' onClick={() => dispatch(increment({type:'Card',id:Date.parse(new Date()),size:'small',title:'a'}))}>addCard</button>
            <button className='menuButton' onClick={() => dispatch(increment({type:'Button',id:Date.parse(new Date()),size:'small',title:'a'}))}>addButton</button>
            <Divider><h3>高级字段</h3></Divider>
            <div style={{height:'10000px'}}>1233</div>
        </div>
    );
}

export default Menu;
