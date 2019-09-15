import React from 'react';
import {scopedClassMaker} from '../utils/className';
import combineClassNames from '../utils/combineClassNames';

const sc = scopedClassMaker('apoloUI-layout');

interface LayoutHeaderProps extends React.HTMLAttributes<HTMLElement> { }

const Header: React.FC<LayoutHeaderProps> = (props) => {
  const {className, ...rest} = props;
  return (
    <div className={combineClassNames(sc('header'), className)} {...rest} > {props.children}</div>
  );
};

export default Header;
