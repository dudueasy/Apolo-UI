import React from 'react';
import {scopedClassMaker} from '../utils/className';
import combineClassNames from '../utils/combineClassNames';

const sc = scopedClassMaker('apoloUI-layout')

interface LayoutFooterProps extends React.HTMLAttributes<HTMLElement>{ }

const Footer: React.FC<LayoutFooterProps> = (props) => {
  const {className, ...rest} = props
  return (<>
      <div className={combineClassNames(sc('footer'), className)} {...rest} >
        {props.children}
      </div>
    </>
  );
};

export default Footer;
