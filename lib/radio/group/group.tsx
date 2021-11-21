import React, {useState} from 'react';
import context, {RadioGroupContextProvider} from '../context'


type LabelValuePair = { label: string, value: React.ReactText }
type Props = {
  options?: (React.ReactText | LabelValuePair)[];
  value?: any;
  defaultValue?: any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: 'button';
};

export const RadioGroup: React.FC<Props> = (props) => {
  const children = props.children
  const options = props.options;
  const value = props.value || props.defaultValue

  React.useEffect(() => {
    console.log(`value`, value);
  }, [value])

  const onRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const previousValue = value

    const targetValue = event.target.value
    const {onChange} = props
    console.log(`onChange: `, onChange);


    if (targetValue !== previousValue) {
      onChange?.(event)
    }
  }


  const renderOptions = () => {
    console.log(`options: `, options);

    if (options && options.length > 0) {
      return options.map((option) => {
        if (typeof option === 'string' || typeof option === 'number') {
          return <label key={option}>
            <input type='radio' value={option} checked={option === value} onChange={onRadioChange}/>
            <span>{option}</span>
          </label>
        } else {
          return <label key={option.value}>
            <input
              type='radio' checked={option === value} value={option.value}
              onChange={onRadioChange}
            />
            <span> {option.label} </span>
          </label>
        }
      })
    } else {
      return children
    }
  }

  return (
    <RadioGroupContextProvider value={{value, onChange: onRadioChange}}>
      {renderOptions()}
    </RadioGroupContextProvider>
  );
};
