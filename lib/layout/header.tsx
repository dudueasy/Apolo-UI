import React from 'react';
import {scopedClassMaker} from '../utils/className';
const sc = scopedClassMaker('apoloUI-layout')

interface LayoutHeaderProps {
  className?: string
  style?: React.CSSProperties
}

const Header: React.FC<LayoutHeaderProps> = (props) => {
  return (
    <div className={sc('header')}> {props.children} </div>
  );
};

export default Header;
