import React from 'react';
import combineClassNames, {scopedClassMaker} from '../utils/className';

const sc = scopedClassMaker('apoloUI-layout');

interface LayoutContentProps extends React.HTMLAttributes<HTMLElement>{ }

const Content: React.FC<LayoutContentProps> = (props) => {
  const {className, ...rest} = props;
  return (
    <div className={combineClassNames(sc('content'), className)} {...rest} > {props.children}</div>
  );
};

export default Content;

