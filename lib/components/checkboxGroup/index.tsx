import React, {CSSProperties, useState} from 'react';
import './style.global.scss'
import combineClassNames, {scopedClassMaker} from "../../utils/className";
import {EnumApoloUIComponentType} from "../../typing";

type CheckboxGroupOption = { label: string, key: string, value: React.ReactText };
export type CheckboxGroupProps = {
  options: CheckboxGroupOption[],
  onChange?: (value: React.ReactText[]) => void,
  buttonStyle?: CSSProperties,
  initialValue?: React.ReactText[],
  value?: React.ReactText[],
  type?: 'button',
  className?: string
}

const sc = scopedClassMaker(EnumApoloUIComponentType.CheckboxGroup)

export const CheckboxGroup: React.FC<CheckboxGroupProps> = (props) => {
  const options = props.options || []
  const onChange = props.onChange
  const initialValue = props.initialValue
  const value = props.value
  const className = props.className
  const typeIsButton = props.type === 'button'

  if (options.length <= 0) {
    throw new Error('component CheckboxGroup received invalid parameter options')
  }

  const [internalValue, setInternalValue] = useState(initialValue || value || [])

  const onCheckboxChange = (item: CheckboxGroupOption ) => {
    const currentValue = internalValue.includes(item.value) ?
      internalValue.filter(_item => _item !== item.value)
      : internalValue.concat(item.value)

    setInternalValue(currentValue)
    onChange?.(currentValue)
  }


  return <div className={combineClassNames(sc(), className)}>{
    options.map((item) => {
      const optionTypeClassname = typeIsButton ? sc('options-button') : sc('option');
      const currentOptionIsChecked = internalValue.includes(item.value)
      const checkedOptionClassName = scopedClassMaker(optionTypeClassname)('checked')

      // 如果 option checked, 那么添加一个 className
      const classNames = currentOptionIsChecked ? combineClassNames(optionTypeClassname, checkedOptionClassName) : optionTypeClassname

      return typeIsButton ?
        <button
          className={classNames}
          key={item.key}
          onClick={() => onCheckboxChange(item)}
        >{item.label}<span/>
        </button> :
        <label key={item.key} className={classNames}>
          <input
            type={'checkbox'}
            onClick={() => onCheckboxChange(item)}
            name={EnumApoloUIComponentType.CheckboxGroup}
          />
          <span>{item.label}</span>
        </label>
    })
  }
  </div>
}
