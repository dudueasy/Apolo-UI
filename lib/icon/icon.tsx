import React from 'react';

// 引入 icons 目录下的所有 svg
import  '../../utils/importAllSvg';
import './icon.scss'


interface Props {
    name: string
}

const Icon: React.FC<Props> = (props) => {
    return (
        <div>
            <svg className={'apoloUI-icon'}>
                <use xlinkHref={`#${props.name}`}/>
            </svg>
        </div>
    );
};


export default Icon;
