import React, {HTMLAttributes, UIEventHandler, useCallback, useEffect, useLayoutEffect, useRef, useState} from 'react';
import combineClassNames, {scopedClassMaker} from '../utils/className';
import './style.scss';

interface ScrollProps extends HTMLAttributes<HTMLDivElement> {};

const sc = scopedClassMaker('apoloUI-scroll');

const Scroll: React.FC<ScrollProps> = (props) => {
  // const offsetDistance = scrollbarWidth();  // 该函数在 mac 上表现异常, 所以不使用
  const {children, className, ...rest} = props;

  const offsetDistance = -16;
  const containerRef = useRef<HTMLDivElement>(null);

  const [barHeight, setBarHeight] = useState(0);
  const [barTop, _setBarTop] = useState(0);

  const setBarTop = useCallback((distance: number) => {
      const scrollHeight = containerRef!.current!.scrollHeight;
      const viewHeight = containerRef!.current!.clientHeight;
      const maxBarTop = (scrollHeight - viewHeight) * viewHeight / scrollHeight;

      if (distance < 0) {
        return;
      }
      if (distance > maxBarTop) {
        return;
      }
      _setBarTop(barTop + distance);
    }, [barHeight]
  );


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

  const draggingRef = useRef(false);
  const initialBarTopRef = useRef(0);
  const initialClientYRef = useRef(0);


  const onMouseDownBar = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    draggingRef.current = true;
    initialClientYRef.current = e.screenY;
    initialBarTopRef.current = barTop;
  };

  const onMouseMove = (e: MouseEvent) => {
    if (draggingRef.current) {
      const delta = e.screenY - initialClientYRef.current;
      setBarTop(initialBarTopRef.current + delta);
    }
  };

  const onMouseUp = (e: MouseEvent) => {
    draggingRef.current = false;
  };


  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

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
      <div className={sc('track')}>
        {/*滚动条本体*/}
        <div
          className={sc('scrollBar')}
          style={{
            height: barHeight,
            transform: `translateY(${barTop}px)`
          }}
          onMouseDown={onMouseDownBar}

        />
      </div>
    </div>
  );
};

export default Scroll;
