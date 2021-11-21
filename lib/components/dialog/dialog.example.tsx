import React, {useState} from 'react';
import Dialog from './dialog';
import Button from '../button/button';

interface Props {}

const DialogExample: React.FC<Props> = (props) => {
  const [visible, toggleVisible] = useState<boolean>(false);

  return (
    <div>
      <Button onClick={() => {toggleVisible((visible) => (!visible));}}>
        toggleDialog
      </Button>
      <Dialog
        visible={visible}
        onClose={() => { toggleVisible(false);}}
        buttons={[
          <Button onClick={() => {toggleVisible(false);}}>
            cancel
          </Button>,
          <Button onClick={() => {toggleVisible(false);}}>
            ok
          </Button>
        ]}
      >11111</Dialog>
    </div>
  );
};
export default DialogExample;
