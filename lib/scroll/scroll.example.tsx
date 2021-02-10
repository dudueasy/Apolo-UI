import React from 'react';
import Scroll from './scroll';

type Props = {

};

const ScrollExample: React.FC<Props> = (props) => {
    return (
        <div>
            <div>
                <h2>第一个例子</h2>
                <Scroll style={{height: 200}}>
                    <p> 这是一段文字 </p>
                    <p> 这是一段文字 </p>
                    <p> 这是一段文字 </p>
                    <p> 这是一段文字 </p>
                    <p> 这是一段文字 </p>
                    <p> 这是一段文字 </p>
                    <p> 这是一段文字 </p>
                    <p> 这是一段文字 </p>
                    <p> 这是一段文字 </p>
                    <p> 这是一段文字 </p>
                    <p> 这是一段文字 </p>
                    <p> 这是一段文字 </p>
                    <p> 这是一段文字 </p>
                    <p> 这是一段文字 </p>
                    <p> 这是一段文字 </p>
                    <p> 这是一段文字 </p>
                    <p> 这是一段文字 </p>
                    <p> 这是一段文字 </p>
                    <p> 这是一段文字 </p>
                    <p> 这是一段文字 </p>
                    <p> 这是一段文字 </p>
                </Scroll>
            </div>
        </div>
    );
};

export default ScrollExample;
