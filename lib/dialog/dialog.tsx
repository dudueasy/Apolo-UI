import React, {ReactElement, ReactNode, useEffect, useState} from 'react';
import './dialog.scss';
import {Icon} from '../index';
import {scopedClassMaker} from '../utils/className';


class Props {
  visible: boolean = false;
  buttons: ReactElement[];
}

const scopedClassName = scopedClassMaker('apoloUI-dialog');
const sc = scopedClassName;

const Dialog: React.FC<Props> = (props) => {
  const {visible, buttons} = props;

  useEffect(() => {console.log('visible is changed to: ', visible);}, [visible]);

  return <>{visible && <>
    <div className={sc('mask')}/>
    <div className={sc()}>
      <div className={sc('close')}>
        <Icon name={'close'}/>
      </div>
      <header className={sc('header')}>header</header>
      <main className={sc('main')}>{props.children}</main>
      <footer className={sc('footer')}>
        {buttons}
        {/*<button>ok</button> <button>cancel</button>*/}
      </footer>
    </div>
  </>
  }
  </>;
};


export default Dialog;





