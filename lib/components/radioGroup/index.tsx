import React, {useState} from 'react';
import './style.global.scss';
import combineClassNames, {scopedClassMaker} from "../../utils/className";
import {EnumApoloUIComponentType} from "../../typing";


export type RadioGroupProps = {
  options: { label: string, key: string, value: React.ReactText }[],
  onChange?: (value: React.ReactText) => void,
  initialValue?: React.ReactText,
  value?: React.ReactText
  type?: 'button'
  className?: string
}

const sc = scopedClassMaker(EnumApoloUIComponentType.RadioGroup)

export const RadioGroup: React.FC<RadioGroupProps> = (props) => {
  const options = props.options || []
  const onChange = props.onChange
  const initialValue = props.initialValue
  const value = props.value
  const className = props.className
  const typeIsButton = props.type === 'button'


  if (options.length <= 0) {
    throw new Error('component RadioGroup received invalid parameter options')
  }

  const [internalValue, setInternalValue] = useState(initialValue || value)


  return <div className={combineClassNames(sc(), className)}>{
    options.map((item) => {
      const optionTypeClassname = typeIsButton ? sc('options-button') : sc('option');
      const currentOptionIsChecked = item.value === internalValue
      const checkedOptionClassName = scopedClassMaker(optionTypeClassname)('checked')

      // 如果 option checked, 那么添加一个 className
      const classNames = currentOptionIsChecked ? combineClassNames(optionTypeClassname, checkedOptionClassName) : optionTypeClassname

      return typeIsButton ?
        <button
          className={classNames}
          key={item.key}
          onClick={() => {
            setInternalValue(item.value)
            onChange?.(item.value)
          }}
        >{item.label}<span/>
        </button> :
        <label key={item.key} className={classNames}>
          <span>{item.label}</span>
          <input
            type={'radio'}
            onClick={() => {
              setInternalValue(item.value)
              onChange?.(item.value)
            }}
            name={EnumApoloUIComponentType.RadioGroup}
          />
        </label>
    })
  }
  </div>
}



