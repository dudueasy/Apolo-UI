import React from 'react';
import Scroll from '../scroll';

type Props = Record<string, unknown>;

const ScrollExample: React.FC<Props> = () => {
  return (
    <div>
      <div>
        <h2>第一个例子</h2>
        <Scroll style={{height: 200, border: '1px solid' }}>
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
