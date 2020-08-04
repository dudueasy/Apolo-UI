import React, {HTMLAttributes} from 'react';
import combineClassNames, {scopedClassMaker} from '../utils/className';
import './style.scss';

interface ScrollProps extends HTMLAttributes<HTMLDivElement> {};

const sc = scopedClassMaker('apoloUI-scroll');

const Scroll: React.FC<ScrollProps> = (props) => {

  // const width = scrollbarWidth();  // 该函数在 mac 上表现异常, 所以不使用
  const width = '-16px';
  const {children, className, ...rest} = props;
  const onScroll = () => {

  };
  return (
    <div
      className={combineClassNames(sc(), className)}
      {...rest}
    >
      <div className={sc('inner')} style={{'right': width}}
           onScroll={onScroll}
      >
        {children}
      </div>
    </div>
  );
};

export default Scroll;
