import React from "react";
import {RadioGroupProps} from "../index";
import {RadioGroup} from "../index";
// import './style.global.scss'
import style from './style.scss';

export const RadiosGroupExample: React.FC = (props) => {
  const radioButtonOptions: RadioGroupProps["options"] = [
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

  const onRadioButtonsChange = (value: any) => {
    console.log(`radioButtons value: `, value);
  }

  console.log(`className: `, style.radioButtonGroup);

  return (<div>
      <div style={{marginBottom: 24}}>
        <h3>RadioGroup</h3>
        <RadioGroup
          options={radioButtonOptions}
          onChange={onRadioButtonsChange}
        />
      </div>
      <div>
        <h3>RadioGroup type=button</h3>
        <RadioGroup
          type='button'
          options={radioButtonOptions}
          onChange={onRadioButtonsChange}
          className={style.radioButtonGroup}
        />
      </div>
    </div>
  )
}

