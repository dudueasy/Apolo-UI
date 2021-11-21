import React, {ReactElement, ReactNode} from 'react';
import ReactDOM from 'react-dom';
import './dialog.global.scss';
import {Icon} from '../../index';
import {scopedClassMaker} from '../../utils/className';
import Button from '../button/button';
import {EnumApoloUIComponentType} from "../../typing";

export class DialogProps {
  visible?: boolean = false;
  title?: ReactNode;
  content?: ReactNode;
  buttons?: ReactElement[];
  closeOnMaskClick?: boolean;
  onClose?: () => void;
}

export interface DialogFuncProps extends DialogProps {
  onOk?: () => void
  onCancel?: () => void
}

export interface DialogFunc {
  (props: DialogFuncProps): () => void
}

const scopedClassName = scopedClassMaker(EnumApoloUIComponentType.Dialog);
const sc = scopedClassName;

type DialogComponent = React.FC<DialogProps> & {
  alert: DialogFunc
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
      {
        props.title &&
        <header className={sc('header')}>{props.title}</header>
      }
      <main className={sc('main')}>{props.children}</main>
      {buttons && buttons.length > 0 &&
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
  onClose: () => {},
  closeOnMaskClick: true,
  title: '提示',
};


// modal() 作为 alert() 和 confirm() 的共用部分
const modal = (props: DialogFuncProps): () => void => {
  const {title, content, buttons, onOk, onCancel} = props;
  const div = document.createElement('div');
  document.body.appendChild(div);

  const closeDialog = (): void => {
    ReactDOM.render(React.cloneElement(component, {visible: false}), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
    onCancel && onCancel();
  };

  const component = (
    <Dialog
      title={title}
      visible={true}
      onClose={closeDialog}
      buttons={buttons}
    >
      {content}
    </Dialog>
  );

  ReactDOM.render(component, div);

  return closeDialog;
};

// 定义 alert 函数, 触发时渲染一个预设的 Dialog
// 接收 title 和 url
// 有一个自带的 ok 按钮, 点击时关闭 Dialog
const alert = (props: DialogFuncProps) => {
  const {title, content} = props;

  const onClose = modal({
    title,
    content,
    buttons: [
      <Button onClick={() => onClose()}>ok</Button>
    ]
  });

  return onClose;
};

// 定义 confirm 函数, 触发时渲染一个预设的 Dialog
// 接收 title, url, onOk, onCancel
// 有两个自带的按钮, 这两个按钮分别执行 用户传入的 onOk, 和 onCancel 参数函数.
// 按钮点击后还会关闭 Dialog
const confirm = (props: DialogFuncProps) => {
  const {title, content, onOk, onCancel} = props;

  const onClose = modal({
    title,
    content,
    buttons: [
      <Button onClick={() => {
        onClose();
        if (onCancel) onCancel();
      }}>
        cancel
      </Button>
      ,
      <Button onClick={() => {
        onClose();
        if (onOk) onOk();
      }}>
        ok
      </Button>,
    ]
  });

  return onClose;
};

// 定义 modal 函数, 触发时渲染一个预设的 Dialog
// 接收 title 和 url 两个参数
// 返回一个可以关闭自身的函数.

Dialog.alert = alert;
Dialog.confirm = confirm;
Dialog.modal = modal;

export {alert, confirm, modal};
export default Dialog;
