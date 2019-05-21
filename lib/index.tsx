import React from 'react';
import ReactDOM from 'react-dom';
import Icon from './icon/icon';
import ScrollExample from './scroll/scroll.example';

// hello
if (module.hot) {
    module.hot.accept();
}

ReactDOM.render(
    <div>
        <Icon name='qq'/>
        <Icon name='alipay'/>
        <Icon name='wechat'/>
    </div>
    , document.querySelector('#app'));
