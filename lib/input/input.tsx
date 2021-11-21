import React from 'react';
import combineClassNames from '../utils/className';
import './input.global.scss';
import {EnumApoloUIComponentType} from "../typing";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<Props> = (props) => {
  const {className, ...rest} = props;
  return (
    <input
      className={combineClassNames(EnumApoloUIComponentType.Input, className)}
      {...rest}
    />
  );
};

export default Input;
