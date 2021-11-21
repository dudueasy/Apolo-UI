import React, {useState} from "react";
import {RadioGroupProps} from "../index";
import {RadioGroup} from "../index";
import style from './style.scss';

export const RadiosGroupControlledExample: React.FC = (props) => {
  const options: RadioGroupProps["options"] = [
    {
      label: '全部',
      key: 'all',
      value: 'all'
    },
    {
      label: '视频',
      key: 'video',
      value: 'video'
    },
    {
      label: '图文',
      key: 'page',
      value: 'page'
    },
    {
      label: '文字',
      key: 'text',
      value: 'text'
    }
  ]

  const onChange = (value: any) => {
    console.log(`value: `, value);
  }


  const [controlledValue, setControlledValue] = useState()
  const onRadioChange = (value: any)=> {
    setControlledValue(value)
  }


  return (<div>
      <div>
        <h3>controlled RadioGroup type=button</h3>
        <RadioGroup
          type='button'
          options={options}
          value={controlledValue}
          onChange={onRadioChange}
          initialValue={'text'}
          className={style.radioButtonGroup}
        />
      </div>
    </div>
  )
}

