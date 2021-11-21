import React from 'react';
// 引入 icons 目录下的所有 svg
import '../../utils/importAllSvg';
// 引入样式文件
import './icon.global.scss';
import combineClassNames from '../../utils/className';
import {EnumApoloUIComponentType} from "../../typing";


interface Props extends React.SVGAttributes<SVGElement> {
  name: string,
}

// Icon 组件接收 name 参数, 作为 icon 的标识
// Icon 组件接收 className 参数, 作为样式类名.
const Icon: React.FC<Props> = (
  {
    className,
    name,
    ...restProps
  }) => {
  return (
    <svg className={combineClassNames(EnumApoloUIComponentType.Icon, className)}
         {...restProps}
    >
      <use xlinkHref={`#${name}`}/>
    </svg>
  );
};


export default Icon;
