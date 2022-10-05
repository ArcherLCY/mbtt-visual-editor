import './consoleStyle.scss'
import { useSelector } from 'react-redux'
// 导入自定义组件
import CardConsole from '../../../components/card/cardConsole'
import ButtonConsole from '../../../components/button/buttonConsole'
import { Divider } from 'antd'
import RateConsole from '../../../components/rate/rateConsole'
function Console() {
  const id = useSelector((state) => state.home.domId)
  const options = useSelector((state) => state.home.domOptions)
  const type = useSelector((state) => state.home.domType)
  return (
    <div className="Console">
      <Divider><h3>控制台</h3></Divider>
      {id === options.id && type === 'Card' && <CardConsole options={options} />}
      {id === options.id && type === 'Button' && <ButtonConsole options={options} />}
    </div>
  );
}

export default Console;
