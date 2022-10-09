import { Radio, Card, Form } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { changeId } from '../../pages/home/slice'
const { Meta } = Card;

function App(options) {
  const dispatch = useDispatch()
  const { inputValue, autoFocus, defaultChecked, disabled, title, tooltip } = options.options;

  return (
    <div className='radioIndex'>
      <Form layout="vertical">
        <Form.Item label={options.options?.title || "选项"}
          required={options.options?.checked}
          onClick={() => {
            console.log(options);
            dispatch(changeId(options.options))
          }}
          style={{
            fontWeight: 700,
            fontFamily: '微软雅黑',
            fontSize: options.options?.fontSize,
          }}
        >
          <h4 className='indexTips'
            onClick={() => {
              console.log(options);
              dispatch(changeId(options.options))
            }}
          >
            {options.options?.tips || ""}
          </h4>
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
        </Form.Item>

      </Form>

    </div >


  )
}


export default App;