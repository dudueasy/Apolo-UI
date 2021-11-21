import React from "react";
import {RadioGroupProps} from "../index";
import {RadioGroup} from "../index";
import style from './style.scss';

export const RadiosGroupExample: React.FC = () => {
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

  return (<div>
      <div style={{marginBottom: 24}}>
        <h3>RadioGroup</h3>
        <RadioGroup
          options={options}
          onChange={onChange}
        />
      </div>
      <div style={{marginBottom: 24}}>
        <h3>RadioGroup type=button</h3>
        <RadioGroup
          type='button'
          options={options}
          onChange={onChange}
          className={style.radioButtonGroup}
        />
      </div>
    </div>
  )
}

