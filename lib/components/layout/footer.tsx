import React from 'react';
import combineClassNames, {scopedClassMaker} from '../../utils/className';
import {EnumApoloUIComponentType} from "../../typing";

const sc = scopedClassMaker(EnumApoloUIComponentType.Layout);

interface LayoutFooterProps extends React.HTMLAttributes<HTMLElement> {}

const Footer: React.FC<LayoutFooterProps> = (props) => {
  const {className, ...rest} = props;
  return (<>
      <div className={combineClassNames(sc('footer'), className)} {...rest} >
        {props.children}
      </div>
    </>
  );
};

export default Footer;
