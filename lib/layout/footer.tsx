import React from 'react';
import {scopedClassMaker} from '../utils/className';
const sc = scopedClassMaker('apoloUI-layout')

interface LayoutFooterProps {
  className?: string
  style?: React.CSSProperties
}

const Footer: React.FC<LayoutFooterProps> = (props) => {
  return (
    <div className={sc('footer')}>{props.children}</div>
  );
};

export default Footer;
