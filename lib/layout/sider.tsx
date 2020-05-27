import React from 'react';
import combineClassNames, {scopedClassMaker} from '../utils/className';

const sc = scopedClassMaker('apoloUI-layout');

interface LayoutSiderProps extends React.HTMLAttributes<HTMLElement> {}

const Sider: React.FC<LayoutSiderProps> = (props) => {
  const {className, ...rest} = props;
  return (<>
      <div className={combineClassNames(sc('sider'), className)} {...rest} >
        {props.children}
      </div>
    </>
  );
};

export default Sider;
