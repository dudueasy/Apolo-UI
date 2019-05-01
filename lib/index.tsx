import React from 'react';
import ReactDOM from 'react-dom';
import Button from './button';

// hello
if (module.hot) {
    module.hot.accept();
}

ReactDOM.render(<Button/>, document.querySelector('#app'));





