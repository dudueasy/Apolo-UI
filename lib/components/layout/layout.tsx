import React, {ReactElement} from 'react';
import combineClassNames, {scopedClassMaker} from '../../utils/className';
import './layout.global.scss';
import Sider from './sider';
import {EnumApoloUIComponentType} from "../../typing";

const sc = scopedClassMaker(EnumApoloUIComponentType.Layout);

interface LayoutProps extends React.HTMLAttributes<HTMLElement> {
  children?: ReactElement | Array<ReactElement>
}

const Layout: React.FunctionComponent<LayoutProps> = (props) => {
  const {className, ...rest} = props;
  const children = props.children as Array<ReactElement>;

  // 判断 渲染的 children 中是否有 Sider
  const hasSider = children && children.length &&
    (props.children as Array<ReactElement>).some(node => node.type === Sider);

  return (
    <div
      className={
        combineClassNames(sc(), className, hasSider ? 'has-sider' : '')
      }
      {...rest}
    >
      {props.children}
    </div>
  );
};

export default Layout;
export {Layout};
export {default as Content} from './content';
export {default as Footer} from './footer';
export {default as Header} from './header';
export {default as Sider} from './sider';
