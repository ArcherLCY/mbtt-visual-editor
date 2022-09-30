import { useDispatch } from 'react-redux'
import { increment } from '../slice'
import './menuStyle.css'


function Menu() {
    const dispatch = useDispatch()
    return (
        <div className="Menu">
            左侧菜单栏 <br />
            <button onClick={() => dispatch(increment('card'))}>addCard</button>
            <div style={{height:'10000px'}}>1233</div>
        </div>
    );
}

export default Menu;
