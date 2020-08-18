import React, {HTMLAttributes, UIEventHandler, useLayoutEffect, useRef, useState} from 'react';
import combineClassNames, {scopedClassMaker} from '../utils/className';
import './style.scss';

interface ScrollProps extends HTMLAttributes<HTMLDivElement> {};

const sc = scopedClassMaker('apoloUI-scroll');

const Scroll: React.FC<ScrollProps> = (props) => {
  // const offsetDistance = scrollbarWidth();  // 该函数在 mac 上表现异常, 所以不使用
  const {children, className, ...rest} = props;

  const offsetDistance = -16;
  const barWidth = 16;
  const containerRef = useRef<HTMLDivElement>(null);

  const [barHeight, setBarHeight] = useState(0);
  const [barTop, setBarTop] = useState(0);

  useLayoutEffect(() => {
    const scrollHeight = containerRef!.current!.scrollHeight;
    const viewHeight = containerRef!.current!.clientHeight;
    setBarHeight(viewHeight * viewHeight / scrollHeight);
  }, []);

  // 得到每次滚动的距离
  const onScroll: UIEventHandler<HTMLDivElement> = (e) => {
    let current = containerRef.current!;
    const scrollHeight = current.scrollHeight;
    const viewHeight = current.clientHeight;
    const scrollTop = current.scrollTop;

    setBarTop(scrollTop * barHeight / viewHeight);
  };

  return (
    <div
      className={combineClassNames(sc(), className)}
      {...rest}
    >
      <div
        className={sc('inner')}
        // style={{right: offsetDistance, bottom: offsetDistance}}
        style={{right: offsetDistance}}
        onScroll={onScroll}
        ref={containerRef}
      >
        {children}
      </div>
      <div className={sc('track')} style={{width: barWidth}}>
        <div className={sc('scrollBar')} style={{
          width: barWidth,
          height: barHeight,
          transform: `translateY(${barTop}px)`
        }}/>
      </div>
    </div>
  );
};

export default Scroll;
