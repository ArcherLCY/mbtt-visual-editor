import { useDispatch } from 'react-redux'
import { increment } from '../slice'
import './menuStyle.scss'
import { FontColorsOutlined,WalletOutlined,AppstoreAddOutlined } from '@ant-design/icons';


function Menu() {
    const dispatch = useDispatch()
    return (
        <div className="Menu">
            <h2>基础组件</h2>
            <div className='Menu-list'>                       
                <button onClick={() => dispatch(increment({ type: 'Text', id: Date.parse(new Date()), value: '单行文本' }))}>
                    <FontColorsOutlined />
                    <span>单行文本</span>
                </button>
                
                <button onClick={() => dispatch(increment({ type: 'Card', id: Date.parse(new Date()), size: 'small', title: '标题' }))}>
                    <WalletOutlined />
                    <span>卡片</span>
                </button>

                <button onClick={() => dispatch(increment({ type: 'Button', id: Date.parse(new Date()), style: 'primary', value: '主要按钮' }))}>
                    <AppstoreAddOutlined />
                    <span>按钮</span>
                </button>

                <button onClick={() => dispatch(increment({ type: 'Radio', id: Date.parse(new Date()), text: '单选框1' }))}>
                    <FontColorsOutlined />
                    <span>单选按钮</span>
                </button>

                <button onClick={() => dispatch(increment({ type: 'Checkbox', id: Date.parse(new Date()), text: '复选框1' }))}>
                    <FontColorsOutlined />
                    <span>复选按钮</span>
                </button>

                <button onClick={() => dispatch(increment({ type: 'Switch', id: Date.parse(new Date()), text: '开关' }))}>
                    <FontColorsOutlined />
                    <span>开关</span>
                </button>

                <button onClick={() => dispatch(increment({ type: 'Picture', id: Date.parse(new Date()), text: '图片' }))}>
                    <FontColorsOutlined />
                    <span>选择图片</span>
                </button>

                <button onClick={() => dispatch(increment({ type: 'Textarea', id: Date.parse(new Date()), text: '文本域' }))}>
                    <FontColorsOutlined />
                    <span>多行文本</span>
                </button>

                <button onClick={() => dispatch(increment({ type: 'Content', id: Date.parse(new Date()), text: '文本' }))}>
                    <FontColorsOutlined />
                    <span>单行文本</span>
                </button>

                <button onClick={() => dispatch(increment({ type: 'Resume', id: Date.parse(new Date()), text: '简历' }))}>
                    <FontColorsOutlined />
                    <span>生成简历</span>
                </button>
            </div>
            <h2>高级组件</h2>
            <div style={{ height: '10000px' }}>
                more
            </div>
        </div>
    );
}

export default Menu;
