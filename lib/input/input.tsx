import React from 'react';
import combineClassNames from '../utils/className';
import './input.scss';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<Props> = (props) => {
  const {className, ...rest} = props;
  console.log(combineClassNames('apolo-ui-input', className));
  return (
    <input
      className={combineClassNames('apolo-ui-input', className)}
      {...rest}
    />
  );
};

export default Input;
