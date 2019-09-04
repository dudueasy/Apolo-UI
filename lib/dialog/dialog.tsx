import React, {ReactElement, ReactNode, useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import './dialog.scss';
import {Icon} from '../index';
import {scopedClassMaker} from '../utils/className';
import {compileFunction} from 'vm';


class Props {
  title?: string;
  visible: boolean = false;
  buttons?: ReactElement[];
  onClose: () => void;
  closeOnMaskClick?: boolean;
}

const scopedClassName = scopedClassMaker('apoloUI-dialog');
const sc = scopedClassName;

const Dialog: React.FC<Props> = (props) => {
  const {visible, buttons, onClose, closeOnMaskClick} = props;

  const onMaskClick: React.MouseEventHandler = (e) => {
    closeOnMaskClick ? onClose!() : null;
  };

  const PortaledComponent = <>
    <div className={sc('mask')} onClick={onMaskClick}/>
    <div className={sc()}>
      <div className={sc('close')}>
        <Icon name={'close'}
              onClick={onClose}
        />
      </div>
      <header className={sc('header')}>{props.title}</header>
      <main className={sc('main')}>{props.children}</main>
      <footer className={sc('footer')}>
        {/*{buttons!.map(( button , index )=> Object.assign({}, button, {key: index} ))}*/}
        {buttons && buttons.map((button, index) =>
          React.cloneElement(button, {key: index}))
        }
      </footer>
    </div>
  </>;

  return <>{
    visible && ReactDOM.createPortal(PortaledComponent, document.body)
  }
  </>;
};

Dialog.defaultProps = {
  onClose:()=>{},
  closeOnMaskClick: true,
  title: '提示',
};


const alert = (content: string) => {

  const div = document.createElement('div');
  document.body.appendChild(div);

  const component = <Dialog visible={true} onClose={() => {

    // ReactDOM.render(<Dialog visible={false} />, div);
    ReactDOM.render(React.cloneElement(component, {visible: false}), div);

    ReactDOM.unmountComponentAtNode(div)
    div.remove()

  }}> {content} </Dialog>;

  ReactDOM.render(component, div);
};

export {alert};
export default Dialog;





