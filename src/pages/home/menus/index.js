import Tooltip from 'antd/lib/tooltip';
import { increment } from '../slice';
import './menuStyle.css';
import { nanoid } from 'nanoid';

// function Menu() {
//   const dispatch = useDispatch()
//   return (
//     <div className="Menu">
//       <h2>基础组件</h2>
//       <div className='Menu-list'>
//         <button onClick={() => dispatch(increment({ type: 'Text', id: nanoid(), value: '单行文本' }))}>单行文本</button>
//         <button onClick={() => dispatch(increment({ type: 'Card', id: nanoid(), size: 'small', title: '标题' }))}>卡片</button>
//         <button onClick={() => dispatch(increment({ type: 'Button', id: nanoid(), style: 'primary', value: '主要按钮' }))}>按钮</button>
//         <button onClick={() => dispatch(increment({ type: 'Radio', id: nanoid(), text: '单选框1' }))}>单选框</button>
//       </div>
//       <h2>高级组件</h2>
//       <button onClick={() => dispatch(increment({
//         type: 'Calendar',
//         id: nanoid(),
//         mode: 'month',
//         fullscreen: true,
//       }))}>日历</button>

//       <button onClick={() => dispatch(increment({
//         type: 'UpLoad',
//         id: nanoid(),
//         accept:'*',
//         action:'',
//         showUploadList:true,
//         multiple:false,

//       }))}>上传</button>

//       <div style={{ height: '10000px' }}>
//       </div>
//     </div>
//   );
//     }

import { useDispatch } from 'react-redux'

import './menuStyle.css'
import { FontColorsOutlined, WalletOutlined, AppstoreAddOutlined } from '@ant-design/icons';
import './menuStyle.scss'
import { Divider } from 'antd'



function Menu() {
    const dispatch = useDispatch()


    return (
        <div className="Menu">
            左侧菜单栏 <br />
            <Tooltip title={'addcard'}>
                {/* title的作用是设置初始值 */}
                <button onClick={() => dispatch(increment({ type: 'Card', id: Date.parse(new Date()), title: 'a' }))}>addCard</button>
            </Tooltip>

            <Tooltip title={'单行文本'}>
                <button onClick={() => dispatch(increment({ type: 'input', id: Date.parse(new Date()), title: '06052101' }))}>单行文本</button>
            </Tooltip>

            <Tooltip title={'多行文字'}>
                <button onClick={() => dispatch(increment({ type: 'textarea', id: Date.parse(new Date()) }))}>多行文本</button>
            </Tooltip>

            <Tooltip title={'图片选择'}>
                <button onClick={() => dispatch(increment({ type: 'picture', id: Date.parse(new Date()) }))}>图片选择</button>
            </Tooltip>

            <Tooltip title={'链接'}>
                <button onClick={() => dispatch(increment({ type: 'src', id: Date.parse(new Date()) }))}>上传链接</button>
            </Tooltip>

            <Tooltip>
                <button onClick={() => dispatch(increment({ type: 'Text', id: Date.parse(new Date()), value: '单行文本' }))}>
                    <FontColorsOutlined />
                    <span>单行文本</span>
                </button>
            </Tooltip>

            <Tooltip>
                <button onClick={() => dispatch(increment({ type: 'Card', id: Date.parse(new Date()), size: 'small', title: '标题' }))}>
                    <WalletOutlined />
                    <span>卡片</span>
                </button>
            </Tooltip>

            <Tooltip>
                <button onClick={() => dispatch(increment({ type: 'Button', id: Date.parse(new Date()), style: 'primary', value: '主要按钮' }))}>
                    <AppstoreAddOutlined />
                    <span>按钮</span>
                </button>
            </Tooltip>

            <Tooltip>
                <button onClick={() => dispatch(increment({ type: 'Radio', id: Date.parse(new Date()), text: '单选框1' }))}>
                    <FontColorsOutlined />
                    <span>单选按钮</span>
                </button>
            </Tooltip>

            <Tooltip>
                <button onClick={() => dispatch(increment({ type: 'Checkbox', id: Date.parse(new Date()), text: '复选框1' }))}>
                    <FontColorsOutlined />
                    <span>复选按钮</span>
                </button>
            </Tooltip>

            <Tooltip>
                <button onClick={() => dispatch(increment({ type: 'Switch', id: Date.parse(new Date()), text: '开关' }))}>
                    <FontColorsOutlined />
                    <span>开关</span>
                </button>
            </Tooltip>


            <div style={{ height: '10000px' }}>1233</div>





            {/* <h2>基础组件</h2> */}



            {/* <button onClick={() => dispatch(increment({ type: 'Text', id: Date.parse(new Date()), value: '单行文本' }))}>
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
                </button> */}



            {/* <h2>高级组件</h2>
            <div style={{ height: '10000px' }}>
                more
            </div> */}
            {/* <Divider><h3>基础字段</h3></Divider>
            <button className='menuButton' onClick={() => dispatch(increment({ type: 'Card', id: Date.parse(new Date()), size: 'small', title: 'a' }))}>addCard</button>
            <button className='menuButton' onClick={() => dispatch(increment({ type: 'Button', id: Date.parse(new Date()), size: 'small', title: 'a' }))}>addButton</button>
            <Divider><h3>高级字段</h3></Divider>
            <div style={{ height: '10000px' }}>1233</div> */}
        </div>
    );
}

export default Menu;
