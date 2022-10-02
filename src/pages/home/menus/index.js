import { useDispatch } from 'react-redux'
import { increment } from '../slice'
import './menuStyle.css'


function Menu() {
    const dispatch = useDispatch()
    return (
        <div className="Menu">
            <h2>基础组件</h2>
            <div className='Menu-list'>
                <button onClick={() => dispatch(increment({type:'Card',id:Date.parse(new Date()),size:'small',title:'标题'}))}>卡片</button>
                <button onClick={() => dispatch(increment({type:'Button',id:Date.parse(new Date()),style:'primary',value:'主要按钮'}))}>按钮</button>
            </div>
            <h2>基础组件</h2>
            <div style={{height:'10000px'}}>
                more
            </div>
        </div>
    );
}

export default Menu;
