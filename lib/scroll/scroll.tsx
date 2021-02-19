import React, {
  HTMLAttributes,
  TouchEventHandler,
  UIEventHandler,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState
} from 'react';
import combineClassNames, {scopedClassMaker} from '../utils/className';
import './style.scss';

interface ScrollProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  onPull?: () => void
}

const sc = scopedClassMaker('apoloUI-scroll');

const Scroll: React.FC<ScrollProps> = (props) => {
  // const offsetDistance = scrollbarWidth();  // 该函数在 mac 上表现异常, 所以不使用
  const {children, className, ...rest} = props;

  const [barVisible, setBarVisible] = useState(false);
  const timerIdRef = useRef<number>()

  const containerRef = useRef<HTMLDivElement>(null);

  const [barHeight, setBarHeight] = useState(0);
  const [barTop, setBarTop] = useState(0);
  const [translateY, setTranslateY] = useState(0);

  const _setBarTop = useCallback((_barTop: number) => {
      const scrollHeight = containerRef?.current?.scrollHeight;
      const clientHeight = containerRef?.current?.clientHeight;

      if (scrollHeight && clientHeight) {
        const maxBarTop = (scrollHeight - clientHeight) * clientHeight / scrollHeight;
        if (_barTop < 0) {
          return;
        }
        if (_barTop > maxBarTop) {
          return;
        }
        setBarTop(_barTop);
      }
    }, []
  );


  useLayoutEffect(() => {
    const scrollHeight = containerRef?.current?.scrollHeight;
    const clientHeight = containerRef?.current?.clientHeight;
    if (scrollHeight && clientHeight) setBarHeight(clientHeight * clientHeight / scrollHeight);
  }, []);

  const onScroll: UIEventHandler<HTMLDivElement> = (e) => {
    setBarVisible(true);
    const current = containerRef.current!;
    const scrollHeight = current.scrollHeight;
    const clientHeight = current.clientHeight;
    const scrollTop = current.scrollTop;

    _setBarTop(scrollTop * barHeight / clientHeight);

    // debounce
    if (timerIdRef.current && barVisible) {
      clearTimeout(timerIdRef.current)
    }
    timerIdRef.current = setTimeout(() => {
      setBarVisible(false);
    }, 300)
  };

  const draggingRef = useRef(false);
  const initialBarTopRef = useRef(0);
  const initialClientYRef = useRef(0);
  const touchStartRef = useRef(0);
  const moveCountRef = useRef(0);
  const pullingRef = useRef(false);

  const onMouseDownBar = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    draggingRef.current = true;
    initialClientYRef.current = e.clientY;

    // 每次拖拽开始时, 才更新 initialBarTopRef, 即拖拽的起点
    initialBarTopRef.current = barTop;
  };

  const onMouseMove = useCallback((e: MouseEvent) => {
    const delta = e.clientY - initialClientYRef.current;

    if (draggingRef.current) {
      // change barTop
      _setBarTop(initialBarTopRef.current + delta);

      // change container's scrollTop
      if (containerRef.current) {
        const clientHeight = containerRef.current.clientHeight;
        const scrollHeight = containerRef?.current?.scrollHeight;
        containerRef.current.scrollTop = (initialBarTopRef.current + delta) * scrollHeight / clientHeight;
      }
    }
  }, [_setBarTop])

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
  }, [onMouseMove]);

  const onTouchStart: TouchEventHandler = (e) => {
    if (containerRef?.current?.scrollTop != 0) {
      return
    } else {
      touchStartRef.current = e.touches[0].clientY;
      moveCountRef.current = 0;
      pullingRef.current = true;
    }
  };
  const onTouchMove: TouchEventHandler = (e) => {
    moveCountRef.current += 1;
    const delta = e.touches[0].clientY - touchStartRef?.current;

    // 如果时第一次触摸，并且是往上拉
    if (moveCountRef.current === 1 && delta < 0) {
      pullingRef.current = false;
      return
    }

    // 对于任意一次触摸， 不是从顶部开始
    if (!pullingRef.current) {
      return
    }
    setTranslateY(translateY + delta);
    touchStartRef.current = e.touches[0].clientY
  };

  const onTouchEnd: TouchEventHandler = (e) => {
    if (pullingRef.current) {
      setTranslateY(0);
      props.onPull && props.onPull()
      pullingRef.current = false;
    }
  };

  return (
    <div
      className={combineClassNames(sc(), className)}
      {...rest}
    >
      <div
        className={sc('inner')}
        onScroll={onScroll}
        ref={containerRef}
        style={{transform: `translateY(${translateY}px)`}}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onTouchMove={onTouchMove}
      >
        {children}
      </div>
      {
        barVisible && <div className={sc('track')}>
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
      }
      <div className="apoloUI-scroll-pulling" style={{height: translateY}}>
        {translateY >= 100 ?
          <span className="apoloUI-scroll-pulling-text">释放手指即可更新</span> :
          <span className="apoloUI-scroll-pulling-icon">↓</span>
        }
      </div>
    </div>
  );
};

export default Scroll;
