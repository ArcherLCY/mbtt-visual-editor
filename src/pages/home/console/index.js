import './consoleStyle.scss'
import { useSelector } from 'react-redux'
// 导入自定义组件
import CardConsole from '../../../components/card/cardConsole'
import ButtonConsole from '../../../components/button/buttonConsole.jsx'
import PictureConsole from '../../../components/picture/indexCosole'
import TextareaConsole from '../../../components/textarea/indexConsole'
import ContentConsole from '../../../components/content/contentConsole'
import RateConsole from '../../../components/rate/rateConsole'
import SwitchConsole from '../../../components/switch/switchConsole'
import EmailConsole from '../../../components/email/emailConsole'
import CheckboxConsole from '../../../components/checkbox/checkboxConsole'
import RadioConsole from '../../../components/radio/radioConsole'
import TextConsole from '../../../components/text/textConsole'
import LinkConsole from '../../../components/link/linkConsole'
import DateConsole from '../../../components/datePicker/datePickerConsole'
import TelephoneConsole from '../../../components/telephone/telephoneConsole'

import { Divider,} from 'antd'
function Console() {
  const id = useSelector((state) => state.home.domId)
  const options = useSelector((state) => state.home.domOptions)
  const type = useSelector((state) => state.home.domType)
  return (
    <div className="Console">
      <Divider><h3>控制台</h3></Divider>
      {id === options.id && type === 'Card' && <CardConsole options={options} />}
      {id === options.id && type === 'Rate' && <RateConsole options={options} />}
      {id === options.id && type === 'Text' && <TextConsole options={options} />} 
      {id === options.id && type === 'Link' && <LinkConsole options={options} />} 
      {id === options.id && type === 'Date' && <DateConsole options={options} />}
      {id === options.id && type === 'Radio' && <RadioConsole options={options} />}
      {id === options.id && type === 'Email' && <EmailConsole options={options} />}
      {id === options.id && type === 'Switch' && <SwitchConsole options={options} />}
      {id === options.id && type === 'Button' && <ButtonConsole options={options} />}
      {id === options.id && type === 'Content' && <ContentConsole options={options} />}
      {id === options.id && type === 'Picture' && <PictureConsole options={options} />}
      {id === options.id && type === 'Textarea' && <TextareaConsole options={options} />}
      {id === options.id && type === 'Checkbox' && <CheckboxConsole options={options} />}
      {id === options.id && type === 'Telephone' && <TelephoneConsole options={options} />}
     
    </div>
  );
}

export default Console;
