import React, {ReactElement, ReactNode, useEffect, useState} from 'react';
import './dialog.scss';
import {Icon} from '../index';
import {scopedClassMaker} from '../utils/className';


class Props {
  visible: boolean = false;
  buttons?: ReactElement[];
  onClose: ()=>void;
  closeOnMaskClick?: boolean;
}

const scopedClassName = scopedClassMaker('apoloUI-dialog');
const sc = scopedClassName;

const Dialog: React.FC<Props> = (props) => {
  const {visible, buttons, onClose, closeOnMaskClick} = props;


  const onMaskClick: React.MouseEventHandler = (e)=>{
     closeOnMaskClick? onClose(): null
  }

  return <>{visible  && <>
    <div className={sc('mask')} onClick={onMaskClick}/>
    <div className={sc()}>
      <div className={sc('close')}>
        <Icon name={'close'}
          onClick={onClose}
        />
      </div>
      <header className={sc('header')}>header</header>
      <main className={sc('main')}>{props.children}</main>
      <footer className={sc('footer')}>
        {/*{buttons!.map(( button , index )=> Object.assign({}, button, {key: index} ))}*/}
        {buttons && buttons.map(( button, index )=>
          React.cloneElement(button,{key: index} ))
        }
      </footer>
    </div>
  </>
  }
  </>;
};

Dialog.defaultProps = {
  closeOnMaskClick: true
}

export default Dialog;





