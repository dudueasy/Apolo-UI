
import {CheckboxGroup, CheckboxGroupProps} from "../index";

import React from "react";
import style from "./style.scss";
export const CheckboxGroupExample: React.FC = (props) => {
  const options: CheckboxGroupProps["options"] = [
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
    console.log( value);
  }

  return (<div>
      <div style={{marginBottom: 24}}>
        <h3>CheckboxGroup</h3>
        <CheckboxGroup
          options={options}
          onChange={onChange}
        />
      </div>
      <div>
        <h3>CheckboxGroup type=button</h3>
        <CheckboxGroup
          type='button'
          options={options}
          onChange={onChange}
          className={style.checkboxButtonGroup}
          initialValue={['text', 'page']}
        />
      </div>
    </div>
  )
}
