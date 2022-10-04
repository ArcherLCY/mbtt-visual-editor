<<<<<<< HEAD
import './consoleStyle.css'
import {useSelector} from 'react-redux'
import CardConsole from '../../../components/card/cardConsole'
import ButtonConsole from '../../../components/button/buttonConsole'
import RadioConsole from '../../../components/radio/radioConsole'
import CheckboxConsole from '../../../components/checkbox/checkboxConsole'
import TextConsole from '../../../components/text/textConsole'
import SwitchConsole from '../../../components/switch/switchConsole'


function Console() {
  const id = useSelector((state)=>state.home.domId)
  const options = useSelector((state)=>state.home.domOptions)
  const type = useSelector((state)=>state.home.domType)
    return (
      <div className="Console">
        <h2 className='Consoole-title'>编辑区</h2>
        {id === options.id && type === 'Card' && <CardConsole options={options}/>}
        {id === options.id && type === 'Button' && <ButtonConsole options={options}/>}
        {id === options.id && type === 'Radio' && <RadioConsole options={options}/>}
        {id === options.id && type === 'Checkbox' && <CheckboxConsole options={options}/>}
        {id === options.id && type === 'Text' && <TextConsole options={options}/>}
        {id === options.id && type === 'Switch' && <SwitchConsole options={options}/>}
      </div>
    );
  }
  
  export default Console;
  
=======
import './consoleStyle.scss'
import { useSelector } from 'react-redux'
import CardConsole from '../../../components/card/cardConsole'
import ButtonConsole from '../../../components/button/buttonConsole'
import { Divider } from 'antd'

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
>>>>>>> d13daf9a5aa2c24a0a69e64e97412054689551af
