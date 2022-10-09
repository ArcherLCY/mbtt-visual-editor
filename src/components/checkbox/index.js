import { Checkbox,Card } from 'antd';
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
      <Checkbox.Group>
        {
          inputValue.map((item, index) => {
            return (
              <Checkbox
                autoFocus={autoFocus || false}
                defaultChecked={defaultChecked || false}
                disabled={disabled || false}
                onClick={() => { dispatch(changeId(options.options)) }} 
              >
              {item}
              </Checkbox>
            )
          })
        }
      </Checkbox.Group>
    </Card>

  )
}


export default App;