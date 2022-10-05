


// function Console() {

//   const id = useSelector((state)=>state.home.domId)
//   const options = useSelector((state)=>state.home.domOptions)
//   const type = useSelector((state)=>state.home.domType)

//   return (
//     <div className="Console">
// 右侧控制台
// {id === options.id && type === 'input' && <ContentConsole options={options}/>}
// {id === options.id && type === 'textarea' && <App_textarea options={options}/>}
// {id === options.id && type === 'picture' && <App_picture options={options}/>}
// {id === options.id && type === 'src' && <File options={options}/>}
// </div>
// )
//   }


import ContentConsole from '../../../components/content/contentConsole'
import App_textarea from '../../../components/textarea/indexConsole';
import App_picture from '../../../components/picture/indexCosole';


import CardConsole from '../../../components/card/cardConsole';
import ButtonConsole from '../../../components/button/buttonConsole';
import RadioConsole from '../../../components/radio/radioConsole';
import TextConsole from '../../../components/text/textConsole';
import CalendarConsole from '../../../components/calendar/calendarConsole';
import UpLoadConsole from '../../../components/upload/uploadConsole';

import { useSelector } from 'react-redux'
import CheckboxConsole from '../../../components/checkbox/checkboxConsole'
import SwitchConsole from '../../../components/switch/switchConsole'
import './consoleStyle.css'


function Console() {
  const id = useSelector((state) => state.home.domId)
  const options = useSelector((state) => state.home.domOptions)
  const type = useSelector((state) => state.home.domType)
  return (
    <div className="Console">
      <h2 className='Consoole-title'>编辑区</h2>
      {id === options.id && type === 'Card' && <CardConsole options={options} />}
      {id === options.id && type === 'Button' && <ButtonConsole options={options} />}
      {id === options.id && type === 'Radio' && <RadioConsole options={options} />}
      {id === options.id && type === 'Checkbox' && <CheckboxConsole options={options} />}
      {id === options.id && type === 'Text' && <TextConsole options={options} />}
      {id === options.id && type === 'Calendar' && <CalendarConsole options={options} />}
      {id === options.id && type === 'UpLoad' && <UpLoadConsole options={options} />}
      {id === options.id && type === 'input' && <ContentConsole options={options} />}
      {id === options.id && type === 'textarea' && <App_textarea options={options} />}
      {id === options.id && type === 'picture' && <App_picture options={options} />}
      {/* {id === options.id && type === 'src' && <File options={options}/>} */}
    </div>
  );
}
export default Console;

