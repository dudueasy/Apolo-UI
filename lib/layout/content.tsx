import React from 'react';
import {scopedClassMaker} from '../utils/className';
const sc = scopedClassMaker('apoloUI-layout')

interface LayoutContentProps {
  className?: string
  style?: React.CSSProperties
}

const Content: React.FC<LayoutContentProps> = (props) => {
  return (
    <div className={sc('content')}>{props.children}</div>
  );
};

export default Content;
