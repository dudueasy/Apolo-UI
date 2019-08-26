import React, {ReactNode, useEffect, useState} from 'react';
import './dialog.scss';
import {Icon} from '../index';
import {scopedClassMaker} from '../utils/className';

class Props {
  visible: boolean = false;
  children: ReactNode;
}

interface State {}

const scopedClass = scopedClassMaker('apoloUI-dialog');
const sc = scopedClass;

const Dialog: React.FC<Props> = (props) => {

  return (
    <>
      {props.visible &&
      <>
        <div className={sc( 'mask' )}>
        </div>
        <div className={sc()}>
          <div className={sc('close')}>
            <Icon name={'close'}/>
          </div>
          <header className={sc('header')}>header</header>
          <main className={sc('main')}>
            {props.children}
          </main>
          <footer className={sc('footer')}>
            <button>ok</button>
            <button>cancel</button>
          </footer>
        </div>
      </>
      }
    </>
  );
};


export default Dialog;





