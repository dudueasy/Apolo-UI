import React, {useState} from "react";
import {RadioGroup} from "./group/group";

const RadioGroupExample: React.FC = () => {
  const options = ['apple', 'banana', 'strawberry']
  const [optionValue, setOptionsValue] = useState<string>()
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOptionsValue(e.target.value)
  }

  React.useEffect(() => {
    console.log(`optionValue`, optionValue);
  }, [optionValue])

  return <RadioGroup
    options={options}
    onChange={onChange}
    value={optionValue}
    defaultValue={'strawberry'}
  />
}


const RadioExample: React.FC = () => {
  return (
    <div>
      <div>
        <h2>第一个例子</h2>
        <RadioGroupExample/>
      </div>
    </div>)
}

export default RadioExample
