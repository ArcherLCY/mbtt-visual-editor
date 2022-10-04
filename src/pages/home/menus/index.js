import { useDispatch } from 'react-redux'
import { increment } from '../slice'
import Tooltip from 'antd/lib/tooltip';
import './menuStyle.css'


function Menu() {
    const dispatch = useDispatch()

    return (
        <div className="Menu">
            左侧菜单栏 <br />
            <Tooltip title = {'addcard'}>
                {/* title的作用是设置初始值 */}
            <button onClick={() => dispatch(increment({type:'Card',id:Date.parse(new Date()),title:'a'}))}>addCard</button> 
            </Tooltip>

            <Tooltip title = {'单行文本'}>
                <button onClick={() => dispatch(increment({type:'input',id:Date.parse(new Date()),title:'06052101'}))}>单行文本</button>
            </Tooltip>

            <Tooltip title = {'多行文字'}>
                <button onClick={() => dispatch(increment({type:'textarea',id:Date.parse(new Date())}))}>多行文本</button>
            </Tooltip>

            <Tooltip title={'图片选择'}>
                <button onClick={() => dispatch(increment({type:'picture',id:Date.parse(new Date())}))}>图片选择</button>
            </Tooltip>

            <Tooltip title={'链接'}>
                <button onClick={() => dispatch(increment({type:'src',id:Date.parse(new Date())}))}>上传链接</button>
            </Tooltip>
            <div style={{ height: '10000px' }}>1233</div>
        </div>
    );
}

export default Menu;
