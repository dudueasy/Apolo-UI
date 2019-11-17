import React from 'react';
import Dialog from './dialog';

interface Props {}

const DialogFnExample: React.FC<Props> = (props) => {
  return <>
    <div>
      <button onClick={() => {
        Dialog.alert({
          title: 'alert demo',
          content: 'Dialog.alert',
        });
      }
      }>alert
      </button>
    </div>

    <div>
      <button onClick={() => {
        Dialog.confirm({
          title: 'confirm demo',
          content: 'Dialog.confirm',
          onOk: () => {console.log('yes');},
          onCancel: () => {console.log('no');},
        });
      }}>
        confirm
      </button>
    </div>

    <div>
      <button onClick={() => {
        const onClose = Dialog.modal({
          content: (
            <>
              <h1>Dialog.modal</h1>
              <button onClick={() => {onClose();}}>close Modal</button>
            </>
          ),
          title: <h4>Modal Example</h4>
        });
      }}
      >
        modal
      </button>
    </div>
  </>;
};


export default DialogFnExample;
