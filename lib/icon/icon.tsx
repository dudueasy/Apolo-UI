import React from 'react';

interface Props {
   name: string
}

const Icon: React.FC<Props> = (props) => {
    return <div>{props.name}</div>;
};

export default Icon;
