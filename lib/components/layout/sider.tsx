import React from 'react';
import combineClassNames, {scopedClassMaker} from '../../utils/className';
import {EnumApoloUIComponentType} from "../../typing";

const sc = scopedClassMaker(EnumApoloUIComponentType.Layout);

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
