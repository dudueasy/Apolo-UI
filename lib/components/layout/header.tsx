/* eslint-disable @typescript-eslint/no-empty-interface */
import React from 'react';
import combineClassNames, {scopedClassMaker} from '../../utils/className';
import {EnumApoloUIComponentType} from "../../typing";

const sc = scopedClassMaker(EnumApoloUIComponentType.Layout);

interface LayoutHeaderProps extends React.HTMLAttributes<HTMLElement> {}

const Header: React.FC<LayoutHeaderProps> = (props) => {
  const {className, ...rest} = props;
  return (
    <div className={combineClassNames(sc('header'), className)} {...rest} >
      {props.children}
    </div>
  );
};

export default Header;
