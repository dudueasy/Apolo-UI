import React from 'react';
import Dialog from './dialog';
import Button from '../button/button';

interface Props {}

const DialogFnExample: React.FC<Props> = (props) => {
  return <>
    <div>
      <Button onClick={() => {
        Dialog.alert({
          title: 'alert demo',
          content: 'Dialog.alert',
        });
      }
      }>alert
      </Button>
    </div>

    <div>
      <Button onClick={() => {
        Dialog.confirm({
          title: 'confirm demo',
          content: 'Dialog.confirm',
          onOk: () => {console.log('yes');},
          onCancel: () => {console.log('no');},
        });
      }}>
        confirm
      </Button>
    </div>

    <div>
      <Button onClick={() => {
        const onClose = Dialog.modal({
          content: (
            <>
              <h1>Dialog.modal</h1>
              <Button onClick={() => {onClose();}}>close Modal</Button>
            </>
          ),
          title: <h4>Modal Example</h4>
        });
      }}
      >
        modal
      </Button>
    </div>
  </>;
};


export default DialogFnExample;
