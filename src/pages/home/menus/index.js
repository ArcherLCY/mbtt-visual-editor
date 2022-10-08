import { useDispatch, useSelector } from 'react-redux'
import { nanoid } from 'nanoid';
import { increment } from '../slice'
import './menusStyle.css'
import './menuStyle.scss'
import { FontColorsOutlined, WalletOutlined, AppstoreAddOutlined } from '@ant-design/icons';

function Menu() {
  const dispatch = useDispatch()
  const domList = useSelector((state) => state.home.domList)
  return (
    <div className="Menu">
      <h2>基础组件</h2>
      <div className='Menu-list'>


        <button onClick={() => {
          dispatch(increment({ type: 'Card', id: Date.parse(new Date()), size: 'small', title: '标题' }));
        }}>
          <WalletOutlined />
          <span>卡片</span>
        </button>

        <button onClick={() => dispatch(increment({ type: 'Button', id: Date.parse(new Date()), style: 'primary', value: '主要按钮' }))}>
          <AppstoreAddOutlined />
          <span>按钮</span>
        </button>

        <button onClick={() => dispatch(increment({ type: 'Switch', id: Date.parse(new Date()), text: '开关', disabled: false }))}>
          <FontColorsOutlined />
          <span>开关</span>
        </button>

        <button onClick={() => dispatch(increment({
          type: 'Text', id: Date.parse(new Date()),
          value: '单行文本', color: '', width: '', fontSize: '', lineHeight: '', fontFamily: '', border: ''
        }))}>
          <FontColorsOutlined />
          <span>单行文本</span>
        </button>

        <button onClick={() => dispatch(increment({
          type: 'Radio', id: Date.parse(new Date()),
          text: ['Apple', 'Pear', 'Orange']
        }))}>
          <FontColorsOutlined />
          <span>单选按钮</span>
        </button>


        <button onClick={() => dispatch(increment({
          type: 'Checkbox', id: Date.parse(new Date()),
          text: '复选框1', autoFocus: 'false', defaultChecked: 'false', disabled: 'flase'
        }))}>
          <FontColorsOutlined />
          <span>复选按钮</span>
        </button>



        <button onClick={() => dispatch(increment({
          type: 'Picture', id: Date.parse(new Date()),
          src: '', width: '', height: '', marginLeft: '', marginRight: '', zIndex: '', marginTop: ''
        }))}>
          <FontColorsOutlined />
          <span>选择图片</span>
        </button>

        <button onClick={() => dispatch(increment({
          type: 'Textarea', id: Date.parse(new Date()),
          value: '', width: '', height: '', marginLeft: '', marginRight: '', zIndex: '', marginTop: ''
        }))}>
          <FontColorsOutlined />
          <span>多行文本</span>
        </button>

        {/* <button onClick={() => dispatch(increment({ type: 'Content', id: Date.parse(new Date()), text: '文本' }))}>
          <FontColorsOutlined />
          <span>单行文本</span>
        </button> */}


        <h2>高级组件</h2>

        <button onClick={() => dispatch(increment({ type: 'DatePicker', id: nanoid(), hasRange: 'DatePicker', showTime: true, placeholder: '' }))}>
          <FontColorsOutlined />
          <span>日期选择框</span>
        </button>

        <h2>模板</h2>
        <button onClick={() => dispatch(increment({ type: 'DatePicker', id: nanoid(), showTime: '' }))}>
          <FontColorsOutlined />
          <span> 疫情打卡</span>
        </button>
      </div>
      <div style={{ height: '10000px' }}>
      </div>
    </div>
  );
}

export default Menu;
