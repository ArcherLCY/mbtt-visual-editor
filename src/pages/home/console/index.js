import './consoleStyle.scss'
import { useSelector } from 'react-redux'
// 导入自定义组件
import CardConsole from '../../../components/card/cardConsole'
import ButtonConsole from '../../../components/button/buttonConsole.jsx'
import PictureConsole from '../../../components/picture/pictureCosole'
import TextareaConsole from '../../../components/textarea/indexConsole'
import ContentConsole from '../../../components/content/contentConsole'
import RateConsole from '../../../components/rate/rateConsole'
import SwitchConsole from '../../../components/switch/switchConsole'
import EmailConsole from '../../../components/email/emailConsole'
import CheckboxConsole from '../../../components/checkbox/checkboxConsole'
import RadioConsole from '../../../components/radio/radioConsole'
import TextConsole from '../../../components/text/textConsole'
import DateConsole from '../../../components/datePicker/datePickerConsole'
import LinkConsole from '../../../components/link/linkConsole'
import TelephoneConsole from '../../../components/telephone/telephoneConsole'
import ShowCode from '../../../showCode/showCode'
import { useState } from 'react'

import { Divider,Button  } from 'antd'
function Console() {
  let [showCode,setShowCode] = useState(false)
  const id = useSelector((state) => state.home.domId)
  const options = useSelector((state) => state.home.domOptions)
  const type = useSelector((state) => state.home.domType)
  let control = (
    <>
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
      {id === options.id && type === 'Content' && <ContentConsole options={options} />}
      {id === options.id && type === 'Telephone' && <TelephoneConsole options={options} />}
    </>
  )
  let Showcode = (
    <ShowCode/>
  )
  return (
    <div className="Console">
      
        <div className='haha'><Button onClick={() => {(setShowCode(showCode = true))}} shape='round'>控制台</Button>
        <Button  onClick={() => {(setShowCode(showCode = false))}} shape='round'>生成代码</Button></div>
      <div>
        {showCode == true ? control : Showcode}
      </div>
    </div>
  );
}

export default Console;
