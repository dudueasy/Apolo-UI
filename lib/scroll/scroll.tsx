import * as React from 'react';
import {HTMLAttributes} from 'react';


interface Props extends HTMLAttributes<HTMLDivElement> {

}


const Scroll: React.FC<Props> = (props) => {
    const {children, ...rest} = props;
    return (
        <div {...rest}>
            {children}
        </div>
    );
};

export default Scroll;