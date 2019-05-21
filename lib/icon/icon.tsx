import React from 'react';

// 引入 icons 目录下的所有 svg
import  '../../utils/importAllSvg';


interface Props {
    name: string
}

const Icon: React.FC<Props> = (props) => {
    return (
        <div>
            <svg>
                <use xlinkHref={`#${props.name}`}/>
            </svg>
        </div>
    );
};


export default Icon;
