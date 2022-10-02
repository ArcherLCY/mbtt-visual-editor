import './consoleStyle.css'
import {useSelector} from 'react-redux'
import CardConsole from '../../../components/card/cardConsole'
import ButtonConsole from '../../../components/button/buttonConsole'

function Console() {
  const id = useSelector((state)=>state.home.domId)
  const options = useSelector((state)=>state.home.domOptions)
  const type = useSelector((state)=>state.home.domType)
    return (
      <div className="Console">
        <h2 className='Consoole-title'>编辑区</h2>
        {id === options.id && type === 'Card' && <CardConsole options={options}/>}
        {id === options.id && type === 'Button' && <ButtonConsole options={options}/>}
      </div>
    );
  }
  
  export default Console;
  