import React, {ReactElement} from 'react';
import {scopedClassMaker} from '../utils/className';
import './layout.scss';
import combineClassNames from '../utils/combineClassNames';
import Sider from './sider';

const sc = scopedClassMaker('apoloUI-layout');

interface LayoutProps extends React.HTMLAttributes<HTMLElement> {
  children?: ReactElement | Array<ReactElement>
}

const Layout: React.FunctionComponent<LayoutProps> = (props) => {
  let {className, ...rest} = props;
  let children = props.children as Array<ReactElement>;

  // 判断 渲染的 children 中是否有 Sider
  const hasSider = children.length &&
    (props.children as Array<ReactElement>).some(node => node.type === Sider)

  return (
    <div className={
      combineClassNames(sc(), className, hasSider ? 'has-sider' : '')
    }
         {...rest}
    >
      {props.children}
    </div>
  );
};

export default Layout;