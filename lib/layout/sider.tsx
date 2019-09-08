import React from 'react';
import {scopedClassMaker} from '../utils/className';
const sc = scopedClassMaker('apoloUI-layout')

interface LayoutSiderProps {
  className?: string
  style?: React.CSSProperties
}

const Sider: React.FC<LayoutSiderProps> = (props) => {
  return (
    <div className={sc('sider')}>{props.children}</div>
  );
};

export default Sider;
