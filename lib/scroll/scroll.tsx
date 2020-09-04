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
    initialClientYRef.current = e.clientY;

    // 每次拖拽开始时, 才更新 initialBarTopRef, 即拖拽的起点
    initialBarTopRef.current = barTop;
  };

  const onMouseMove = (e: MouseEvent) => {
    const delta = e.clientY - initialClientYRef.current;
    if (draggingRef.current) {
      // change barTop
      setBarTop(initialBarTopRef.current + delta);

      // change container's scrollTop
      if (containerRef.current) {
        containerRef.current.scrollTop = (initialBarTopRef.current + delta) * containerRef.current.scrollHeight / containerRef.current.clientHeight;
      }
    }
  };

  const onMouseUp = (e: MouseEvent) => {
    draggingRef.current = false;
  };


  const onSelectStart = (e: Event) => {
    // 只有 滚动条被拖动的时候, 才阻止事件的行为
    if (draggingRef.current) e.preventDefault();
  };

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('selectstart', onSelectStart);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('selectstart', onSelectStart);
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
