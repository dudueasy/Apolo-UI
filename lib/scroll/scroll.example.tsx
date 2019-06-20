import * as React from 'react';
import Scroll from './scroll';

interface Props {

}


const ScrollExample: React.FC<Props> = () => {
    return (
        <div>
            <div>
                <h2>第一个例子</h2>
            </div>

            <Scroll style={{height: 400, border: '1px solid red'}}>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>

            </Scroll>

        </div>
    );
};

export default ScrollExample
