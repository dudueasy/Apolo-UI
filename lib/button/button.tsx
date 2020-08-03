import React from 'react';
import combineClassNames, {scopedClassMaker} from '../utils/className';
import './button.scss';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  level?: 'important' | 'danger' | 'normal'
}

const Button: React.FC<Props> = (props) => {
  const {children, className, level = 'normal', ...rest} = props;
  const sc = scopedClassMaker('apoloUI-button');
  return (
    <button
      className={
        combineClassNames('apoloUI-button', `apoloUI-button-${level}`, className)
      }
      {...rest}
    >{children}
    </button>
  );
};

export default Button;
