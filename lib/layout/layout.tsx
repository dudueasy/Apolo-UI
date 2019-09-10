import React from 'react';
import {scopedClassMaker} from '../utils/className';
import './layout.scss';
import combineClassNames from '../utils/combineClassNames';

const sc = scopedClassMaker('apoloUI-layout');

interface LayoutProps extends React.HTMLAttributes<HTMLElement> {
  className?: string
}

const Layout: React.FC<LayoutProps> = (props) => {
  const {className, ...rest} = props;
  console.log(props.children)

  return (
    <div className={combineClassNames(sc(), className) }
         {...rest}
    >
      {props.children}
    </div>
  );
};

export default Layout;
