import React from 'react';
import {scopedClassMaker} from '../utils/className';
import './layout.scss'

const sc = scopedClassMaker('apoloUI-layout')

interface LayoutProps extends React.HTMLAttributes<HTMLElement>{
  className?: string
}

const Layout: React.FC<LayoutProps> = (props) => {

  const {className, ...rest} = props

  return (
    <div className={sc(className)} {...rest} >
      { props.children }
    </div>
  );
};

export default Layout;
