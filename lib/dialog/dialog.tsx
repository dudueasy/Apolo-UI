import React, {ReactElement, ReactNode, useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import './dialog.scss';
import {Icon} from '../index';
import {scopedClassMaker} from '../utils/className';

class Props {
  title?: string;
  visible: boolean = false;
  buttons?: ReactElement[];
  onClose?: () => void;
  closeOnMaskClick?: boolean;
}


const scopedClassName = scopedClassMaker('apoloUI-dialog');
const sc = scopedClassName;

type DialogComponent = React.FC<Props> & {
  alert: (content: string)=> void
  confirm: (props: {content: string, onOk?:()=>void, onCancel?: ()=>void})=> void
}

// const Dialog: React.FC<Props> = (props) => {
const Dialog: DialogComponent = (props) => {
  const {visible, buttons, onClose, closeOnMaskClick} = props;

  const onMaskClick: React.MouseEventHandler = (e) => {
    closeOnMaskClick ? onClose!() : null;
  };

  const PortalComponent = <>
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
        {buttons && buttons.map((button, index) =>
          React.cloneElement(button, {key: index}))
        }
      </footer>
    </div>
  </>;

  return <>{
    visible && ReactDOM.createPortal(PortalComponent, document.body)
  }
  </>;
};

Dialog.defaultProps = {
  onClose:()=>{},
  closeOnMaskClick: true,
  title: '提示',
};


// 定义 alert 函数, 触发时生成一个预设的 Dialog
Dialog.alert = (content: string) => {

  const div = document.createElement('div');
  document.body.appendChild(div);

  const component = <Dialog visible={true} onClose={() => {
    ReactDOM.render(React.cloneElement(component, {visible: false}), div);
    ReactDOM.unmountComponentAtNode(div)
    div.remove()
  }}>
    {content}
  </Dialog>;

  ReactDOM.render(component, div);
};

Dialog.confirm = (props: { content: string, onOk():void, onCancel():void} ) => {

  const {content, onOk, onCancel} = props


  const closeConfirm = ():void=>{
    ReactDOM.render(React.cloneElement(component, {visible: false}),div)
    ReactDOM.unmountComponentAtNode(div)
    div.remove()
  }

  const component = (
    <Dialog
      visible={true}
      buttons={[

        <button onClick={()=>{
          closeConfirm()
          onOk()
        }}>
          ok
        </button>,

        <button onClick={()=>{
          closeConfirm()
          onCancel()
        }}>
          cancel
        </button>,

      ]}
      onClose={()=>{
        ReactDOM.render(<Dialog visible={false}/>, div)
        ReactDOM.unmountComponentAtNode(div)
        div.remove()
      }}>
      {content}
    </Dialog>
  )

  const div = document.createElement('div')
  document.body.appendChild(div)

  ReactDOM.render(component,div)
}


const alert = Dialog.alert
const confirm = Dialog.confirm

export {alert, confirm}

export default Dialog;





