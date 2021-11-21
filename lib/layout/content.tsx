import React from 'react';
import combineClassNames, {scopedClassMaker} from '../utils/className';
import {EnumApoloUIComponentType} from "../typing";

const sc = scopedClassMaker(EnumApoloUIComponentType.Layout);

interface LayoutContentProps extends React.HTMLAttributes<HTMLElement> {}

const Content: React.FC<LayoutContentProps> = (props) => {
  const {className, ...rest} = props;
  return (
    <div className={combineClassNames(sc('content'), className)} {...rest} >
      {props.children}
    </div>
  );
};

export default Content;

