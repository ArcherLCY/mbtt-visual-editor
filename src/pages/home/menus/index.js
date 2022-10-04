import { useDispatch } from 'react-redux'
import { increment } from '../slice'
import './menuStyle.css'


function Menu() {
    const dispatch = useDispatch()
    return (
        <div className="Menu">
            <button onClick={() => dispatch(increment({type:'Card',id:Date.parse(new Date()),size:'small',title:'a'}))}>addCard</button>
            <button onClick={() => dispatch(increment({type:'Button',id:Date.parse(new Date()),size:'small',title:'a'}))}>addButton</button>
            <div style={{height:'10000px'}}>1233</div>
        </div>
    );
}

export default Menu;
