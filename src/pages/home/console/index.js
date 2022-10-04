import './consoleStyle.css'
import {useSelector} from 'react-redux'
// 导入自定义组件
import CardConsole from '../../../components/card/cardConsole'
import ButtonConsole from '../../../components/button/buttonConsole'
import RateConsole from '../../../components/rate/rateConsole'
function Console() {
  // 取出状态中的domid = id
  const id = useSelector((state)=>state.home.domId)
  // 取出状态中的action.payload = options
  const options = useSelector((state)=>state.home.domOptions)
  // 取出状态中的domType = type
  const type = useSelector((state)=>state.home.domType)
    return (
      // 如果id 和 type 匹配的话就将控制台设置的属性 传给对应组件，作为其属性 挂载到action的data属性当中
      <div className="Console">
        右侧控制台
        {id === options.id && type === 'Card' && <CardConsole options={options}/>}
        {id === options.id && type === 'Button' && <ButtonConsole options={options}/>}
        {id === options.id && type === 'Rate' && <RateConsole options={options}/>}
      </div>
    );
  }

  export default Console;
  