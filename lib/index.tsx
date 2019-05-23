import React from 'react';
import ReactDOM from 'react-dom';
import Icon from './icon/icon';
import ScrollExample from './scroll/scroll.example';

// hello
if (module.hot) {
    module.hot.accept();
}

const onClick:React.MouseEventHandler = (e: React.MouseEvent<SVGElement>) => {
    console.log(`Icon is clicked`);
    console.log(e.currentTarget.classList)
};

const onMouseEnter: React.MouseEventHandler = ()=>{
    console.log('mouse enter')
}


const onMouseLeave: React.MouseEventHandler = ()=>{
    console.log('mouse leave')
}

const onTouchStart: React.TouchEventHandler = ()=>{
    console.log('touch start')
}

ReactDOM.render(
    <div>
        <Icon name='qq'
              onClick={onClick}/>
        <Icon name='alipay' onClick={onClick}/>
        <Icon name='wechat' onClick={onClick}/>
    </div>
    , document.querySelector('#app'));
