import React, {ReactElement, ReactFragment, ReactNode, useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import './dialog.scss';
import {Icon} from '../index';
import {scopedClassMaker} from '../utils/className';

export class DialogProps {
  title?: ReactNode;
  visible?: boolean = false;
  buttons?: ReactElement[];
  onClose?: () => void;
  closeOnMaskClick?: boolean;
  content?: ReactNode
}

export interface DialogFuncProps extends DialogProps{
  onOk?: ()=>void
  onCancel?: ()=>void
}

export interface DialogFunc {
  (props: DialogFuncProps): any
}

const scopedClassName = scopedClassMaker('apoloUI-dialog');
const sc = scopedClassName;

type DialogComponent = React.FC<DialogProps> & {
  alert:DialogFunc
  confirm: DialogFunc
  modal: DialogFunc
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
      { buttons && buttons.length > 0 &&
        <footer className={sc('footer')}>
          {buttons.map((button, index) =>
            React.cloneElement(button, {key: index}))
          }
        </footer>
      }
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
Dialog.alert = ({content}) => {
  const div = document.createElement('div');
  document.body.appendChild(div);

  const onClose = () => {
      ReactDOM.render(React.cloneElement(component, {visible: false}), div);
      ReactDOM.unmountComponentAtNode(div)
      div.remove()
    }

  const component = (
    <Dialog
      visible={true}
      title={'alert'}
      onClose={onClose}
    >
      {content}
    </Dialog>
  );

  ReactDOM.render(component, div);
};

Dialog.confirm = (props: DialogFuncProps ) => {
  const {content, onOk, onCancel} = props

  const onClose = ()=>{
    ReactDOM.render(<Dialog visible={false}/>, div)
    ReactDOM.unmountComponentAtNode(div)
    div.remove()
  }

  const component = (
    <Dialog
      title={'confirm'}
      visible={true}
      buttons={[
        <button onClick={()=>{
          onClose()
          if(onCancel) onCancel()
        }}>
          cancel
        </button>,
        <button onClick={()=>{
          onClose()
          if(onOk) onOk()
        }}>
          ok
        </button>,
      ]}

      onClose={onClose}>
      {content}
    </Dialog>
  )

  const div = document.createElement('div')
  document.body.appendChild(div)

  ReactDOM.render(component,div)
}

Dialog.modal = (props: DialogFuncProps):()=>void =>
{
  const {content, onOk, onCancel} = props

  const closeModal = ():void=>{
    ReactDOM.render(React.cloneElement(component, {visible: false}),div)
    ReactDOM.unmountComponentAtNode(div)
    div.remove()
  }

  const component = (
    <Dialog
      title={'confirm'}
      visible={true}
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
  return closeModal
}


const alert = Dialog.alert
const confirm = Dialog.confirm
const modal = Dialog.modal

export {alert, confirm, modal}
export default Dialog;
