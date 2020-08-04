import React, {HTMLAttributes} from 'react';
import combineClassNames, {scopedClassMaker} from '../utils/className';
import './style.scss';
import {scrollbarWidth} from './scrollbarWidth';

interface ScrollProps extends HTMLAttributes<HTMLDivElement> {};

const sc = scopedClassMaker('apoloUI-scroll');

const Scroll: React.FC<ScrollProps> = (props) => {

  const width = scrollbarWidth();


  const {children, className, ...rest} = props;
  const onScroll = () => {

  };
  return (
    <div
      className={combineClassNames(sc(), className)}
      {...rest}
    >
      <div className={sc('inner')} style={{'right': '-16px'}}
           onScroll={onScroll}
      >
        {children}
      </div>
    </div>
  );
};

export default Scroll;
