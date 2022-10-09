import { Radio, Card } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { changeId } from '../../pages/home/slice'
const { Meta } = Card;

function App(options) {
  const dispatch = useDispatch()
  const { inputValue, autoFocus, defaultChecked, disabled, title,tooltip } = options.options;

  return (
    <Card
      size="small"
      title={title}
    >
      <Meta description={tooltip} />
      <Radio.Group>
        {
          inputValue.map((item, index) => {
            return (
              <Radio
                autoFocus={autoFocus || false}
                defaultChecked={defaultChecked || false}
                disabled={disabled || false}
                value={item}
                onClick={() => { dispatch(changeId(options.options)) }}
                key={index}
              >{item}</Radio>

            )
          })
        }
      </Radio.Group>
    </Card>




  )
}


export default App;