import {  useSelector } from 'react-redux';
import ContentConsole from '../../../components/content/contentConsole'
import App_textarea from '../../../components/textarea/indexConsole';
import App_picture from '../../../components/picture/indexCosole';
import CardConsole from '../../../components/card/cardConsole'
import File from '../../../components/src/srcConsole'
import './consoleStyle.css'

function Console() {

  const id = useSelector((state)=>state.home.domId)
  const options = useSelector((state)=>state.home.domOptions)
  const type = useSelector((state)=>state.home.domType)

  return (
    <div className="Console">
右侧控制台
{id === options.id && type === 'Card' && <CardConsole options={options}/>}
{id === options.id && type === 'input' && <ContentConsole options={options}/>}
{id === options.id && type === 'textarea' && <App_textarea options={options}/>}
{id === options.id && type === 'picture' && <App_picture options={options}/>}
{id === options.id && type === 'src' && <File options={options}/>}
    </div>
  );
}

export default Console;
