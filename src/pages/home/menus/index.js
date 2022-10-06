import { useDispatch } from 'react-redux';
import { increment } from '../slice';
import './menuStyle.css';
import {nanoid} from 'nanoid';

function Menu() {
    const dispatch = useDispatch()
    return (
        <div className="Menu">
            <h2>基础组件</h2>
            <div className='Menu-list'>
                <button onClick={() => dispatch(increment({ type: 'Text', id: nanoid(), value: '单行文本' }))}>单行文本</button>
                <button onClick={() => dispatch(increment({ type: 'Card', id: nanoid(), size: 'small', title: '标题' }))}>卡片</button>
                <button onClick={() => dispatch(increment({ type: 'Button', id: nanoid(), style: 'primary', value: '主要按钮' }))}>按钮</button>
                <button onClick={() => dispatch(increment({ type: 'Radio', id: nanoid(), text: '单选框1' }))}>单选框</button>
            </div>
            <h2>高级组件</h2>
            <button onClick={() => dispatch(increment({ type: 'DatePicker', id: nanoid(),hasRange:'DatePicker',showTime:true,placeholder:''}))}>日期选择框</button>
            
            <h2>模板</h2>
            <button onClick={() => dispatch(increment({ type: 'DatePicker', id: nanoid()}))}>疫情打卡</button>
            <div style={{ height: '10000px' }}>
            </div>
        </div>
    );
}

export default Menu;
