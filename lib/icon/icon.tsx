import React from 'react';

// 引入 icons 目录下的所有 svg
import '../../utils/importAllSvg';
import './icon.scss';


interface Props {
    name: string,
    onClick?: React.MouseEventHandler<SVGElement>
}

const Icon: React.FC<Props> = (props) => {
    return (
        <svg className={'apoloUI-icon'}
             onClick={props.onClick}
        >
            <use xlinkHref={`#${props.name}`}/>
        </svg>
    );
};


export default Icon;
