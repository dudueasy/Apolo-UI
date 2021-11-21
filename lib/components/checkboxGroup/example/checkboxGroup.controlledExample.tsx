import {CheckboxGroup, CheckboxGroupProps} from "../index";
import React, {useEffect, useState} from "react";
import style from "./style.scss";

export const CheckboxGroupExampleControlled: React.FC = (props) => {
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
  const [value, setValue] = useState()

  const onChange = (value: any) => {
    setValue( value);
  }
  useEffect(() => {
    console.log(`value: `, value);
  }, [value])

  return (<div>
      <div style={{marginBottom: 24}}>
        <h3>controlled CheckboxGroup</h3>
        <CheckboxGroup
          type='button'
          options={options}
          onChange={onChange}
          className={style.checkboxButtonGroup}
          value={value}
          initialValue={['text', 'page']}
        />
      </div>
    </div>
  )
}
